const inputCheckin = document.querySelector('#checkin'); // Input para check-out de tipo date
const inputCheckout = document.querySelector('#checkout'); // Input para check-in de tipo date
const inputNumber = document.querySelector('#qntdPessoas'); // Input para quantidade de pessoas de tipo number
const inputQuartos = document.querySelectorAll('input[name="quarto-radio"]'); // Inputs para quarto de tipo radio
const h2QuartoTitulo = document.querySelectorAll('#quartoTitulo');
const valorQuarto = document.querySelectorAll('#quartoValor');
const inputEle = document.getElementById('inputDesconto');
const btnDesconto = document.getElementById('btnDesconto');
const btnConfirmarReserva = document.getElementById('btnConfirmarReserva')


// Setando valores padrão no ínicio do funcionamento do código
localStorage.setItem('qtdePessoas', parseInt(inputNumber.value)); // Quantidade de pessoas padrão (1)
document.querySelector('#pessoas').textContent = localStorage.getItem('qtdePessoas');

//Guardando checkin
inputCheckin.onchange = function () {
	if (inputCheckin.value === '') return;

	localStorage.setItem('checkin', pegarData(inputCheckin.value));
	document.querySelector('#pcheckin').textContent = pegarData(localStorage.getItem('checkin'));
}

//Guardando checkout
inputCheckout.onchange = function () {
	if (inputCheckout.value === '') return;

	localStorage.setItem('checkout', pegarData(inputCheckout.value));
	document.querySelector('#pcheckout').textContent = pegarData(localStorage.getItem('checkout'));
}

// Transforma datas "aaaa/mm/dd" em variáveis separadas: ano, mês, dia
function pegarData(data) {
	data = data.replaceAll(/-/g, '');
	let ano = (data.slice(0, 4));
	let mes = (data.slice(4, 6));
	let dia = (data.slice(6, 8));

	return `${dia}/${mes}/${ano}`;
}

//Guardando quantidade de pessoas
inputNumber.addEventListener('change', () => {
	if (inputNumber.value === '') return;

	inputNumber.value = inputNumber.value > 5 ? 5 : inputNumber.value < 1 ? 1 : inputNumber.value;

	localStorage.setItem('qtdePessoas', parseInt(inputNumber.value));
	document.querySelector('#pessoas').textContent = localStorage.getItem('qtdePessoas');
})

// Botões radio "onchange" = quartos()
for (let i = 0; i < inputQuartos.length; i++) {
	inputQuartos[i].onchange = function () { quartos(); }
}

//Guardando quarto
function quartos() {
	for (let i = 0; i < inputQuartos.length; i++) {
		if (inputQuartos[i].checked) {
			localStorage.setItem('quarto', i + 1);
			localStorage.setItem('nomeQuarto', h2QuartoTitulo[i].textContent);
			document.querySelector('#pquarto').textContent = h2QuartoTitulo[i].textContent;	
			localStorage.setItem('valorQuarto', parseFloat(valorQuarto[i].innerHTML).toFixed(2));	
			document.querySelector('#pvalorReserva').innerHTML = ("Valor da reserva: R$ "  + calcularValorTotalReserva());
			break;
		}
	}
}

// Mostrar e fechar modal
function closeOpenModal(modal) {
			document.getElementById('servicosModal').style.display =
			document.getElementById('servicosModal').style.display === 'block' ? 'none' : 'block';
}

// Mostrar e fechar modal
function closeOpenModalResumo() {

		document.getElementById('resumoReservaModal').style.display =
		document.getElementById('resumoReservaModal').style.display === 'block' ? 'none' : 'block';
}

function closeOpenModalResumoConfirmar() {

		document.getElementById('resumoReservaModal').style.display =
		document.getElementById('resumoReservaModal').style.display === 'block' ? 'none' : 'block';
		document.getElementById('aMinhasReservas').style.display = 'block';
}




//Serviços Adicionais
function servicos() {
	let val = [];

	const servicos = document.getElementsByName('servicos')

	for (let i = 0; i < servicos.length; i++) {
		if (servicos[i].checked) {
			let nome = document.getElementsByName('servicoNome')[i].textContent;
			let valor = document.getElementsByName('servicoValor')[i].textContent.replace(',', '.');
			let porPessoa = document.getElementsByName('servicoValor')[i].id === 'pPessoa' ? true : false;

			val[i] = {
				nome,
				valor,
				porPessoa
			}

			localStorage.setItem(`servico${i}`, val[i]);
		}
	}

	let valorTotal = 0;

	for (let i = 0; i < val.length; i++) {
		if (val[i] !== undefined) {
			if (val[i].porPessoa)
				valorTotal += parseFloat(val[i].valor) * parseInt(localStorage.getItem('qtdePessoas'));
			else
				valorTotal += parseFloat(val[i].valor);
		}
	}

	document.querySelector('#totalServicos').textContent = ('Subtotal serviços: ' + formatarDinheiro(valorTotal))
	localStorage.setItem('valorTotalAdicionais', parseFloat(valorTotal).toFixed(2))
	calcularValorTotalReserva()
}

// Transformar número em moeda (20.4 = "R$ 20,40")
function formatarDinheiro(num) {
	return num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function valorTotalServ(val) {
	for (let i = 0; i < val.length; i++) {
		if (val[i] !== undefined) {
			if (val[i].porPessoa)
				valorTotal += parseFloat(val[i].valor) * parseInt(localStorage.getItem('qtdePessoas'));
			else
				valorTotal += parseFloat(val[i].valor);
		}
	}

	document.querySelector('#totalServicos').textContent = ('Subtotal serviços: ' + formatarDinheiro(valorTotal));
	document.querySelector('#botaoAddServicos').textContent =
		val.length > 0 ? `Adicionar mais serviços (${val.length})` : 'Adicionar mais serviços';
}

function diasEntreDatas(checkin, checkout) {
	return Math.round((new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24));
}

function geradorCupomDesconto() {

	var cupomDesconto = '';
	var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (var i = 0; i < 8; i++) {
		cupomDesconto += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
	}

	return cupomDesconto

}

function calcularValorTotalReserva(){

	let valorTotalAdicionais = localStorage.getItem('valorTotalAdicionais') 
	let valorQuarto = localStorage.getItem('valorQuarto')

	let valorTotalReserva = parseFloat(valorTotalAdicionais) + parseFloat(valorQuarto)

	localStorage.setItem('valorTotalReserva', valorTotalReserva);

	return parseFloat(valorTotalReserva).toFixed(2)
}

function calcularDesconto(){

	let valorDesconto = calcularValorTotalReserva() * (10/100)
	let valorTotal = calcularValorTotalReserva() - valorDesconto
	document.querySelector('#pvalorReserva').innerHTML = ("Valor da reserva: R$ "  + parseFloat(valorTotal).toFixed(2));

	return parseFloat(valorTotal).toFixed(2)	

}

	btnDesconto.addEventListener("click", () => {
		const inputCupom = document.getElementById("inputDesconto").value;
		localStorage.setItem("cupomInputado", inputCupom);

		var cupomValido = localStorage.getItem('cupomValido');

		if (inputCupom == cupomValido){
			calcularDesconto()
		} else {
			alert("Cupom inválido");
		}


});

//Modal Resumo Reserva
document.querySelector('#totalModalResumo').textContent = "Valor total da reserva: R$" + localStorage.getItem('valorTotalReserva');
document.querySelector('#quartoModalResumo').textContent = "Quarto: " + localStorage.getItem('nomeQuarto');
document.querySelector('#checkinModalResumo').textContent = "Data do Check-in: " + localStorage.getItem('checkin');
document.querySelector('#checkoutModalResumo').textContent = "Data do Check-out: " + localStorage.getItem('checkout');
document.querySelector('#pessoasModalResumo').textContent = "Número de hóspedes: " + localStorage.getItem('qtdePessoas');

	var cupomDesconto = geradorCupomDesconto()
	localStorage.setItem("cupomValido", cupomDesconto);
	console.log(cupomDesconto)

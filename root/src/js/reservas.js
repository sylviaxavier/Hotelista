const inputCheckin = document.querySelector('#checkin'); // Input para check-out de tipo date
const inputCheckout = document.querySelector('#checkout'); // Input para check-in de tipo date
const inputNumber = document.querySelector('#qntdPessoas'); // Input para quantidade de pessoas de tipo number
const inputQuartos = document.querySelectorAll('input[name="quarto-radio"]'); // Inputs para quarto de tipo radio
const h2QuartoTitulo = document.querySelectorAll('#quartoTitulo');

// Setando valores padrão no ínicio do funcionamento do código
document.querySelector('#pcheckin').textContent = '__/__/____'; // Data de check-in
document.querySelector('#pcheckout').textContent = '__/__/____'; // Data de check-out
localStorage.setItem('qtdePessoas', inputNumber.value); // Quantidade de pessoas
document.querySelector('#pessoas').textContent = localStorage.getItem('qtdePessoas');

//Guardando checkin
inputCheckin.onchange = function () {
	if (inputCheckin.value === '') return;

	localStorage.setItem('checkin', inputCheckin.value);
	document.querySelector('#pcheckin').textContent = pegarData(localStorage.getItem('checkin'));
}

//Guardando checkout
inputCheckout.onchange = function () {
	if (inputCheckout.value === '') return;

	localStorage.setItem('checkout', inputCheckout.value);
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

	localStorage.setItem('qtdePessoas', inputNumber.value);
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
			document.querySelector('#pquarto').textContent = h2QuartoTitulo[i].textContent;
			break;
		}
	}
}

// Mostrar e fechar modal
function closeOpenModal() {
	document.getElementById('servicosModal').style.display =
		document.getElementById('servicosModal').style.display === 'block' ? 'none' : 'block';
}

//Serviços Adicionais
function servicos() {
	let val1, val2, val3, val4, val5, valorTotal;

	localStorage.removeItem('servicoAdicional01');
	localStorage.removeItem('servicoAdicional02');
	localStorage.removeItem('servicoAdicional03');
	localStorage.removeItem('servicoAdicional04');
	localStorage.removeItem('servicoAdicional05');

	localStorage.setItem('valor01', 0);
	localStorage.setItem('valor02', 0);
	localStorage.setItem('valor03', 0);
	localStorage.setItem('valor04', 0);
	localStorage.setItem('valor05', 0);

	const servicos = document.getElementsByName('servicos')

	for (var i = 0; i < servicos.length; i++) {
		if (servicos[i].checked) {
			if (servicos[i].value == "servico01") {
				let servico_01 = "Café da manhã";
				localStorage.setItem('servicoAdicional01', servico_01)
				let valor = document.getElementById('span1').innerText
				localStorage.setItem('valor01', valor)

			}
			else if (servicos[i].value == "servico02") {
				var servico_02 = "Almoço";
				localStorage.setItem('servicoAdicional02', servico_02)
				let valor = document.getElementById('span2').innerText
				localStorage.setItem('valor02', valor)
			}
			else if (servicos[i].value == "servico03") {
				var servico_03 = "Jantar";
				localStorage.setItem('servicoAdicional03', servico_03)
				let valor = document.getElementById('span3').innerText
				localStorage.setItem('valor03', valor)
			}
			else if (servicos[i].value == "servico04") {
				var servico_04 = "Limpeza diária";
				localStorage.setItem('servicoAdicional04', servico_04)
				let valor = document.getElementById('span4').innerText
				localStorage.setItem('valor04', valor)
			}
			else if (servicos[i].value == "servico05") {
				var servico_05 = "Frigobar com variedades";
				localStorage.setItem('servicoAdicional05', servico_05)
				let valor = document.getElementById('span5').innerText
				localStorage.setItem('valor05', valor)
			}
		}

	}
	val1 = (parseFloat(textContent = localStorage.getItem('valor01')))
	val2 = (parseFloat(textContent = localStorage.getItem('valor02')))
	val3 = (parseFloat(textContent = localStorage.getItem('valor03')))
	val4 = (parseFloat(textContent = localStorage.getItem('valor04')))
	val5 = (parseFloat(textContent = localStorage.getItem('valor05')))

	let pessoas = (parseInt(textContent = localStorage.getItem('qtdePessoas')))
	valorTotal = (val1 + val2 + val3 + val5) * pessoas + val4
	document.querySelector('#totalServicos').textContent = ('Subtotal serviços: R$ ' + valorTotal.toFixed(2))
}
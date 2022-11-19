console.log('teste js') 

const inputCheckin = document.querySelector('#checkin')
const inputCheckout = document.querySelector('#checkout')
const inputNumber = document.querySelector('#qntdPessoas')
localStorage.setItem('qtdePessoas', 1)  


//Guardando checkin
inputCheckin.onchange = function()
{
    if(inputCheckin.value != '')
    {
        let formata = ''

        localStorage.setItem('checkin', inputCheckin.value)
        let checkin = textContent=localStorage.getItem('checkin')

        let busca = /-/gi
        checkin = checkin.replace(busca, '')
        let ano = (checkin.slice(0,4))
        let mes = (checkin.slice(4,6))
        let dia = (checkin.slice(6,8))

        formata = formata.concat(dia + '/' + mes + '/' + ano)
        console.log(formata)

        document.querySelector('#pcheckin').textContent=(formata)
    } else
        {
            null
        }
}

//Guardando checkout
inputCheckout.onchange = function ()
{
    if(inputCheckout.value != '')
    {
        let formata = ''

        localStorage.setItem('checkout', inputCheckout.value)
        let checkout = textContent=localStorage.getItem('checkout')

        let busca = /-/gi
        checkout = checkout.replace(busca, '')
        let ano = (checkout.slice(0,4))
        let mes = (checkout.slice(4,6))
        let dia = (checkout.slice(6,8))

        formata = formata.concat(dia + '/' + mes + '/' + ano)
        console.log(formata)

        document.querySelector('#pcheckout').textContent=(formata)    
    } else
        {
            null
        }
}

//Guardando quantidade de pessoas
inputNumber.addEventListener('click', ()=>
{
    if(inputNumber.value != '')
    {
        localStorage.setItem('qtdePessoas', inputNumber.value)
        let qtdePessoas = textContent=localStorage.getItem('qtdePessoas')
        document.querySelector('#pessoas').textContent=('0' + qtdePessoas)
    } else 
        {
            null
        }
})

//Guardando quarto
function quartos(){
const tipoQuarto = document.getElementsByName('quarto')
for (var i = 0; i < tipoQuarto.length; i++)
{
    if (tipoQuarto[i].value == "quarto1")
    {
        let quarto_01 = "Quarto simples"
        console.log(quarto_01)
    } else
      {
        console.log("não é")
      }

}

}

//Serviços Adicionais
function servicos(){

let val1, val2, val3, val4, val5, valorTotal

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

for (var i = 0; i < servicos.length; i++){
    if ( servicos[i].checked ) {
        if(servicos[i].value == "servico01")
        {
            let servico_01 = "Café da manhã";
            localStorage.setItem('servicoAdicional01', servico_01)
            let valor = document.getElementById('span1').innerText
            localStorage.setItem('valor01', valor)

        }  
            else if (servicos[i].value == "servico02") 
            {
                var servico_02 = "Almoço";
                localStorage.setItem('servicoAdicional02', servico_02)
                let valor = document.getElementById('span2').innerText
                localStorage.setItem('valor02', valor)
            } 
            else if (servicos[i].value == "servico03") 
            {
                var servico_03 = "Jantar";
                localStorage.setItem('servicoAdicional03', servico_03)
                let valor = document.getElementById('span3').innerText
                localStorage.setItem('valor03', valor)
            } 
            else if (servicos[i].value == "servico04") 
            {
                var servico_04 = "Limpeza diária";
                localStorage.setItem('servicoAdicional04', servico_04)
                let valor = document.getElementById('span4').innerText
                localStorage.setItem('valor04', valor)
            }
            else if (servicos[i].value == "servico05") 
            {
                var servico_05 = "Frigobar com variedades";
                localStorage.setItem('servicoAdicional05', servico_05)
                let valor = document.getElementById('span5').innerText
                localStorage.setItem('valor05', valor)
            }
    }

}
val1 = (parseFloat(textContent=localStorage.getItem('valor01')))
val2 = (parseFloat(textContent=localStorage.getItem('valor02')))
val3 = (parseFloat(textContent=localStorage.getItem('valor03')))
val4 = (parseFloat(textContent=localStorage.getItem('valor04')))
val5 = (parseFloat(textContent=localStorage.getItem('valor05')))

let pessoas = (parseInt(textContent=localStorage.getItem('qtdePessoas')))
valorTotal = (val1 + val2 + val3 + val5) * pessoas + val4
document.querySelector('#totalServicos').textContent=('Subtotal serviços: R$ ' + valorTotal.toFixed(2))    
}

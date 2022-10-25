var selector = document.getElementById('select')
var divInc = document.getElementById('incremento')
var incremento = document.getElementById('incremecesar')
var base = document.getElementById('base')
var alfabeto = "abcdefghijklmnopqrstuvwxyz"
var botaoEnviar = document.getElementById('botaoEnviar')
var saidaTexto = document.getElementById('saidaTexto')


function inicio(){
    divInc.style.display = 'none'
    base.style.display = 'none'
    
}

selector.addEventListener("change", function (){
    
    if(selector.value == "cifracesar"){
        divInc.style.display = 'block'
        base.style.display = 'none'
    }else if(selector.value == "base"){
        base.style.display = 'block'
        divInc.style.display = 'none'
    }else{
        base.style.display = 'none'
        divInc.style.display = 'none'
        alert('Escolha entre Cifra de César ou Base64')
    }
})




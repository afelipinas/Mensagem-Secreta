var selector = document.getElementById('select')
var divInc = document.getElementById('incremento')
var incremento = document.getElementById('incremecesar')
var base = document.getElementById('base')
var alfabeto = "abcdefghijklmnopqrstuvwxyz"
var botaoEnviar = document.getElementById('botaoEnviar')
var saidaTexto = document.getElementById('saidaTexto')
var submit = document.getElementById('submitBase')




function Codificar(){
    var texto = document.getElementById('entradaTexto').value;
    var letMin = texto.toLowerCase();
    var increment = (Number(incremento.value) % 26);
    var resultado = " ";

    for(var i=0; i<letMin.length; i++){
        for( var j=0; j < alfabeto.length; j++){
            if(letMin[i] == alfabeto[j]){
                resultado += alfabeto[j + increment]
                break;
            }else if(letMin[i] == " "){
                resultado += " ";
                break;
            }
        }
        saidaTexto.value = resultado;

    }
}

function Decodificar(){
    var texto = document.getElementById('entradaTexto').value;
    var letMin = texto.toLowerCase();
    var increment = (Number(incremento.value) % 26);
    var resultado = " ";

    for(var i=0; i < letMin.length; i++){
        for( var j = alfabeto.length - 1; j>=0; j--){
            if(letMin[i] == alfabeto[j]){
                resultado += alfabeto[j - increment]
                break;
            }else if(letMin[i] == " "){
                resultado += " ";
                break;
            }
        }
        saidaTexto.value = resultado;

    }
}




botaoEnviar.addEventListener('click', function(e){
    e.preventDefault();
    let botCod = document.getElementById('botcod')
    let botDecod = document.getElementById('botdecod')
    if(botCod.checked){
        return Codificar()
    }else if(botDecod.checked){
        return Decodificar()}else{
         alert("Tente novamente")
    }
})


function CBase(){
    var saidaTexto = document.getElementById('saidaBase')
    var texto = document.getElementById('entradaTexto').value;
    var result = btoa(texto);
    saidaTexto.value = result;
}

function DBase(){
    var saidaTexto = document.getElementById('saidaBase')
    var texto = document.getElementById('entradaTexto').value;
    var result = atob(texto);
    saidaTexto.value = result;
}


submit.addEventListener('click', function(e){
    e.preventDefault();
    var botCBase = document.getElementById('codeBase')
    var botDBase = document.getElementById('decodBase')
    if(botCBase.checked){
        return CBase()
    }else if(botDBase.checked){
        return DBase()}else{
         alert("Tente novamente")
    }
})




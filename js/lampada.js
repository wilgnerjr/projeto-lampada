var buttonOn = document.getElementById ('buttonOn');
var buttonOff = document.getElementById ('buttonOff');
var lampada = document.getElementById ('lampada');
var a = document.getElementsByTagName ('main')[0];
var k = document.getElementById ('tituloclaro');

function alampadaestaquebrada () {
    return lampada.src.indexOf ('quebrada') > -1
}
function quandoestiverligado () {
    return lampada.src.indexOf ('ligada') > -1
}
function lampadaOn () {
    if (!alampadaestaquebrada ()) {
        lampada.src = 'img/ligada.png';
        a.style.background = 'white';
        buttonOff.style.background = 'black';
        buttonOff.style.color = 'white';
        buttonOn.style.background = 'black';
        buttonOn.style.color = 'white';
        k.style.color = 'black';
    }
}
function lampadaOff () {
    if (!alampadaestaquebrada ()) {
        lampada.src = 'img/desligada.png';
        a.style.background = 'black';
        buttonOff.style.background = 'white';
        buttonOff.style.color = 'black';
        buttonOn.style.background = 'white';
        buttonOn.style.color = 'black';
        k.style.color = 'white';
        
    }
}
function lampadaQuebrada () {
    lampada.src = 'img/quebrada.png';
}


buttonOn.addEventListener ('click', lampadaOn);
buttonOff.addEventListener ('click', lampadaOff);
lampada.addEventListener ('dblclick',lampadaQuebrada);
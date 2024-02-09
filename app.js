//alcance de la variable, alcance de bloque 
//sin valor aquí
let numeroSecreto = 0;
let intentos = 0;
//array
let listaNumerosSorteados = [];
let numeromaximo = 10;
//console.log(numeroSecreto); para que salga al inicio y validar
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    ///=== igual los tipos de datos
    //console.log(numeroDeUsuario === numeroSecreto);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        //templetes strings y operador ternario en un parámetro
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}
//las funciones siempre afuera
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumerosecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeromaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números aquí se implimentó la recursividad
    if (listaNumerosSorteados.length == numeromaximo) {
        asignarTextoElemento('p', 'Ya se asignaron todos los números posibles');
    }else{
         //si el número generado está en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            //array:recurisvidad
            return generarNumerosecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
   
 
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeromaximo}`);
    numeroSecreto = generarNumerosecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja. 
    limpiarCaja();
    //indicar mensaje de intervalo de números
    // generar el número aleatorio. sin el let porque solo lo estoy usando
    //inicializar el número de intentos.
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego. 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();




//hoisting


/* //esto se conviertió a asignarTextoElemento 'p'
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';

//camelcase
antes
function asignarTextoElemento(){
    let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Juego del número secreto actualizado    ';
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
} */
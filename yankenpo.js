// definí esta variable constante para que haga referencia al input del html

const userInput = 'piedra' ;

// esta función es para mandar lo que esté en el input a minúsculas (por si alguien se mete a poner Piedra o PIEDRA y chequear si es una de las 3 opciones.)
function processUserChoice() {
    userInput.toLowerCase()
    if (userInput === 'piedra' || userInput === 'papel' || userInput ==='tijeras'){
        return userInput;
    } else alert('Debes ingresar piedra, papel o tijeras');
}

//acá asigno el user choice a lo que retorne la función de arriba 🔝
var userChoice = processUserChoice()

function thinkComputerChoice() {
    randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber){
    case 0:
        return 'papel'
        break;
    case 1:
        return 'piedra'
        break;
    case 2:
        return 'tijeras'
        break;
    }
}

//acá asigno el computer choice a lo de la función de arriba 🔝
var computerChoice = thinkComputerChoice()

const determineWinner = function(){
    if (userChoice === computerChoice){
        return 'El juego fue un empate.'
    }
    else {
        if (userChoice === 'piedra'){
            if (computerChoice === 'papel'){
                return 'La computadora gana.'
            } else {
                return 'Tu ganas.'
            }
        }
        if (userChoice === 'papel'){
            if (computerChoice === 'piedra'){
                return 'Tu ganas.'
            } else {
                return 'La computadora gana.'
            }
        }
        if (userChoice === 'tijeras'){
            if (computerChoice === 'papel'){
                return 'Tu ganas.'
            } else {
                return 'La computadora gana.'
            }
        }
    }
}

// aquí estoy asignando al ganador que se decidió con los condicionales a la variable winner
var winner = determineWinner()

// y esta última función debería hacer un popup que te diga si ganaste o no, o si salió empate)
function alertWinner(){
    alert('Escogiste ' + userChoice + '. La computadora sacó ' + computerChoice + '. ' + winner)
}

alertWinner()


let puertaU = document.getElementById("cerradaUno");
let puertaD = document.getElementById("cerradaDos");
let puertaT = document.getElementById("cerradaTres");

let botonUno;
let botonDos;
let botonTres;
let clickCount = 0;
let min = 1;
let max = 4;
let numRandom;
let numGanador;
let victorias = document.getElementById("victorias").value;
victorias = 0;

let derrotas = document.getElementById("derrotas").value;
derrotas = 0;

let played = document.getElementById("totalJugado").value;
played = 0;

//Primera Puerta
botonUno = document.getElementById("cerradaUno");

botonUno.addEventListener("click", puertaUno);

function puertaUno(){
    //Primer Click
    clickCount++;

    if(clickCount == 1){
        numGanador = Math.floor(Math.random() * (max - min) + min);

        numRandom = Math.floor(Math.random() * (max - min) + min);
        while(numRandom == 1 || numRandom == numGanador){
            numRandom = Math.floor(Math.random() * (max - min) + min);
        }
    }

    console.log("Ganador: "+numGanador);

    if(numRandom == 2){
        puertaU.src = "images/door_stay.png"
        puertaD.src = "images/door_closed_jimmy.png"
        puertaT.src = "images/door_switch.png"
    } else if(numRandom == 3){
        puertaU.src = "images/door_stay.png"
        puertaD.src = "images/door_switch.png"
        puertaT.src = "images/door_closed_jimmy.png"
    }

    //Segundo click
    if(clickCount == 2 && numGanador == 1){
        return ganadorUno(), subirVictorias();
    } else if(clickCount == 2 && numGanador == 2){
        return ganadorDos(), subirDerrotas();
    } else if(clickCount == 2 && numGanador == 3){
        return ganadorTres(), subirDerrotas();
    }

    //Tercer click
    if (clickCount == 3){
        return PlayAgain(), vecesJugado();
    }

}

//Segunda Puerta
botonDos = document.getElementById("cerradaDos");

botonDos.addEventListener("click", puertaDos);

function puertaDos(){
    //Primer click
    clickCount++;

    if(clickCount == 1){
        numGanador = Math.floor(Math.random() * (max - min) + min);

        numRandom = Math.floor(Math.random() * (max - min) + min);
        while(numRandom == 2 || numRandom == numGanador){
            numRandom = Math.floor(Math.random() * (max - min) + min);
        }
    }
    
    console.log("Ganador: "+numGanador);

    if(numRandom == 1){
        puertaU.src = "images/door_closed_jimmy.png"
        puertaD.src = "images/door_stay.png"
        puertaT.src = "images/door_switch.png"
    } else if(numRandom == 3){
        puertaU.src = "images/door_switch.png"
        puertaD.src = "images/door_stay.png"
        puertaT.src = "images/door_closed_jimmy.png"
    }

    //Segundo click
    if(clickCount == 2 && numGanador == 2){
        return ganadorDos(), subirVictorias();
    } else if(clickCount == 2 && numGanador == 3){
        return ganadorTres(), subirDerrotas();
    } else if(clickCount == 2 && numGanador == 1){
        return ganadorUno(), subirDerrotas();
    }

    //Tercer click
    if(clickCount == 3){
        return PlayAgain(), vecesJugado();
    }

}

//Tercera Puerta
botonTres = document.getElementById("cerradaTres");

botonTres.addEventListener("click", puertaTres);

function puertaTres(){
    //Primer click
    clickCount++;

    if(clickCount == 1){
        numGanador = Math.floor(Math.random() * (max - min) + min);

        numRandom = Math.floor(Math.random() * (max - min) + min);
        while(numRandom == 3 || numRandom == numGanador){
            numRandom = Math.floor(Math.random() * (max - min) + min);
        }
    }

    console.log("Ganador: "+numGanador);

    if(numRandom == 1){
        puertaU.src = "images/door_closed_jimmy.png"
        puertaD.src = "images/door_switch.png"
        puertaT.src = "images/door_stay.png"
    } else if(numRandom == 2){
        puertaU.src = "images/door_switch.png"
        puertaD.src = "images/door_closed_jimmy.png"
        puertaT.src = "images/door_stay.png"
    }

    //Segundo click
    if(clickCount == 2 && numGanador == 1){
        return ganadorUno(), subirDerrotas();
    } else if (clickCount == 2 && numGanador == 2){
        return ganadorDos(), subirDerrotas();
    } else if (clickCount == 2 && numGanador == 3){
        return ganadorTres(), subirVictorias();
    }

    //Tercer click
    if(clickCount == 3){
        return PlayAgain(), vecesJugado();
    }

}

//Funciones auxiliares
function ganadorUno(){
    puertaU.src = "images/door_open_price.png"
    puertaD.src = "images/leon.png"
    puertaT.src = "images/leon.png"
}

function ganadorDos(){  
    puertaU.src = "images/leon.png"
    puertaD.src = "images/door_open_price.png"
    puertaT.src = "images/leon.png"
}

function ganadorTres(){   
    puertaU.src = "images/leon.png"
    puertaD.src = "images/leon.png"
    puertaT.src = "images/door_open_price.png"
}

//Funcion Resetear
function PlayAgain(){

    if(clickCount == 2){
        vecesJugado();
    }

    clickCount = 0;
    puertaU.src ="images/door_closed1.png";
    puertaD.src ="images/door_closed1.png";
    puertaT.src ="images/door_closed1.png";

    //console.log("Play Again!");
}

function subirVictorias(){
    victorias++;
    document.getElementById("victorias").value = victorias
}

function subirDerrotas(){
    derrotas++;
    document.getElementById("derrotas").value = derrotas;
}

function vecesJugado(){
    played++;
    document.getElementById("totalJugado").value = played;
}

//Funcion contadores
function Restaurar(){
    victorias = 0;
    derrotas = 0;
    played = 0;
    clickCount = 0;
    document.getElementById("victorias").value = victorias;
    document.getElementById("derrotas").value = derrotas;
    document.getElementById("totalJugado").value = played;
}





let btnFuncion = document.getElementById("btnFuncion");
btnFuncion.addEventListener("click", Repetir);

function Repetir(){

    let repeticiones = document.getElementById("repeticiones").value;
    repeticiones = parseInt(repeticiones);

    let estrategia = document.getElementById("list").value;
    
    if(isNaN(repeticiones)){
        alert("Ingresar solo numeros"), document.getElementById("repeticiones").value = "";
    }

    if(estrategia == "cambiar"){

        for(i=1; i <= repeticiones; i++){
            puertasAleatoriasCambiar();
            
        }
    }

    if(estrategia == "quedarse"){
        for(i=1; i <= repeticiones * 3; i++){
            puertasAleatoriasQuedarse();
        }
    }

}




let randomUno = document.getElementById("cerradaUno");
let randomDos = document.getElementById("cerradaDos");
let randomTres = document.getElementById("cerradaTres");

randomUno.addEventListener("click", puertasAleatoriasCambiar);
function puertasAleatoriasCambiar(){

    puertaUno();
    console.log(`clickCount: ${clickCount}, num puerta ${numRandom}`);


    if(numRandom == 2){
        puertaTres();
    } else if(numRandom == 3){
        puertaDos();
    }

    PlayAgain();

}

function puertasAleatoriasQuedarse(){

    puertaUno();
}
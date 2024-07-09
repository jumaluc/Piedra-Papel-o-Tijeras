let valido = true; 
let validoJugar = true;

const piedra1 = document.createElement("img")
const papel1 = document.createElement("img")
const tijeras1 = document.createElement("img")

const piedra2 = document.createElement("img")
const papel2 = document.createElement("img")
const tijeras2 = document.createElement("img")

piedra1.setAttribute("id","piedra1")
papel1.setAttribute("id","papel1")
tijeras1.setAttribute("id","tijeras1")
piedra2.setAttribute("id","piedra2")
papel2.setAttribute("id","papel2")
tijeras2.setAttribute("id","tijeras2")

piedra1.tabIndex = 1;
papel1.tabIndex = 2;
tijeras1.tabIndex = 3;


piedra1.setAttribute("src","Screenshot_1.png")
papel1.setAttribute("src","Screenshot_2.png")
tijeras1.setAttribute("src","Screenshot_3.png")

piedra2.setAttribute("src","Screenshot_1.png")
papel2.setAttribute("src","Screenshot_2.png")
tijeras2.setAttribute("src","Screenshot_3.png")

const intermedio = document.querySelector(".intermedio")
const contenedor = document.querySelector(".contenedor")



const jugadores = document.querySelectorAll(".subContenedor")
const jugador1 = jugadores[0]
const jugador2 = jugadores[1]


const textoJugador1 = document.createElement("h3")
const textoJugador2 = document.createElement("h3")

textoJugador1.innerHTML = "Jugador 1"
textoJugador2.innerHTML = "Jugador 2"

const divJugador1 = document.createElement("div")
const divJugador2 = document.createElement("div")




divJugador1 .appendChild(textoJugador1)
divJugador2.appendChild(textoJugador2)

divJugador1.appendChild(jugador1)
divJugador2.appendChild(jugador2)

divJugador1.setAttribute("class","divJugador")
divJugador2.setAttribute("class","divJugador")

jugador1.appendChild(piedra1)
jugador1.appendChild(papel1)
jugador1.appendChild(tijeras1)

jugador2.appendChild(piedra2)
jugador2.appendChild(papel2)
jugador2.appendChild(tijeras2)

intermedio.appendChild(divJugador1
)
intermedio.appendChild(divJugador2
)

contenedor.appendChild(intermedio)

const boton = document.createElement("button");

boton.innerHTML = "JUGAR";
contenedor.appendChild(boton);

papel1.addEventListener("click", imagenApretada);
piedra1.addEventListener("click", imagenApretada);
tijeras1.addEventListener("click", imagenApretada);

let clikeado = 0;

function imagenApretada(e) {

    if(!valido){
        return
    }

    let imagenId = e.target.id;

    piedra1.style.filter = "none";
    papel1.style.filter = "none";
    tijeras1.style.filter = "none";

    if (imagenId === "piedra1") {
        clikeado = 1;
        piedra1.style.filter = "invert(100%)";
        piedra1.style.transition = "filter 0.3s"

    } else if (imagenId === "papel1") {
        papel1.style.filter = "invert(100%)";
        papel1.style.transition = "filter 0.3s"

        clikeado = 2;
    } else if (imagenId === "tijeras1") {
        tijeras1.style.filter = "invert(100%)";
        tijeras1.style.transition = "filter 0.3s"

        clikeado = 3;
    }
}

boton.addEventListener("click", (e) => {

    if(!validoJugar){
        return
    }

    valido = false;
    let jugador1S;
    let jugador2S = Math.floor(Math.random() * 3) + 1;
    let resultado;

    if (clikeado === 0) {
        return 0;
    } else if (clikeado === 1) {
        jugador1S = "piedra";
    } else if (clikeado === 2) {
        jugador1S = "papel";
    } else if (clikeado === 3) {
        jugador1S = "tijeras";
    }

    limpiarResultadoAnterior();

    if (clikeado !== 0) {
        if (jugador2S === 1 && jugador1S === "piedra") {
            resultado = "Empate";
        } else if (jugador2S === 2 && jugador1S === "papel") {
            resultado = "Empate";
        } else if (jugador2S === 3 && jugador1S === "tijeras") {
            resultado = "Empate";
        } else if (jugador2S === 1 && jugador1S === "papel") {
            resultado = "Jugador 1";
        } else if (jugador2S === 1 && jugador1S === "tijeras") {
            resultado = "Jugador 2";
        } else if (jugador2S === 2 && jugador1S === "piedra") {
            resultado = "Jugador 2";
        } else if (jugador2S === 2 && jugador1S === "tijeras") {
            resultado = "Jugador 1";
        } else if (jugador2S === 3 && jugador1S === "piedra") {
            resultado = "Jugador1";
        } else if (jugador2S === 3 && jugador1 === "papel") {
            resultado = "Jugador 2";
        }

        aplicarFiltroJugador2(jugador2S);
        crearAdvertenciaGanador(resultado);
    }
});

function aplicarFiltroJugador2(jugador2S) {
    reiniciarFiltros();

    if (jugador2S === 1) {
        piedra2.style.filter = "invert(100%)";
    }
    if (jugador2S === 2) {
        papel2.style.filter = "invert(100%)";
    }
    if (jugador2S === 3) {
        tijeras2.style.filter = "invert(100%)";
    }
}

function reiniciarFiltros() {
    piedra2.style.filter = "none";
    papel2.style.filter = "none";
    tijeras2.style.filter = "none";
}

function limpiarResultadoAnterior() {
    const mensajesAnteriores = contenedor.querySelectorAll(".mensaje-ganador");
    mensajesAnteriores.forEach((mensaje) => {
        mensaje.remove();
    });
}

function crearAdvertenciaGanador(resultado) {
    const ganador = document.createElement("div");
    ganador.classList.add("mensaje-ganador"); 
    const mensaje = document.createElement("h3");


    if(resultado === "Empate"){
        mensaje.innerHTML = `¡HUBO UN ${resultado}!`
    }
    else{
        mensaje.innerHTML = `¡EL GANADOR ES ${resultado}!`;

    }



    ganador.appendChild(mensaje);

    ganador.style.position = "fixed"
    ganador.style.width = "450px"
    ganador.style.height = "200px"
    ganador.style.borderRadius = "19px"
    ganador.style.marginTop = "250px"
    ganador.style.backgroundColor =  "rgb(24, 14, 31)";

    ganador.style.display = "flex"
    ganador.style.flexDirection = "column"
    ganador.style.justifyContent = "center"
    ganador.style.alignItems = "center"

    const aceptar = document.createElement("button")
    aceptar.innerHTML = "ACEPTAR"

    validoJugar = false; 

    ganador.appendChild(aceptar)

    aceptar.addEventListener("click", () => {
        ganador.style.display = "none"; 
        valido = true
        reiniciarFiltros()
        piedra1.style.filter = "none";
        papel1.style.filter = "none";
        tijeras1.style.filter = "none";
        validoJugar = true;

    });


    contenedor.appendChild(ganador);

}

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
    let imagenId = e.target.id;

    if (imagenId === "piedra1") {
        clikeado = 1;
        console.log("Se apretó PIEDRA");
    } else if (imagenId === "papel1") {
        clikeado = 2;
        console.log("Se apretó PAPEL");
    } else if (imagenId === "tijeras1") {
        clikeado = 3;
        console.log("Se apretó TIJERA");
    }
}

boton.addEventListener("click", (e) => {
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

    // Limpiar mensajes anteriores antes de mostrar el nuevo resultado
    limpiarResultadoAnterior();

    if (clikeado !== 0) {
        if (jugador2S === 1 && jugador1S === "piedra") {
            resultado = "empate";
        } else if (jugador2S === 2 && jugador1S === "papel") {
            resultado = "empate";
        } else if (jugador2S === 3 && jugador1S === "tijeras") {
            resultado = "empate";
        } else if (jugador2S === 1 && jugador1S === "papel") {
            resultado = "jugador 1";
        } else if (jugador2S === 1 && jugador1S === "tijeras") {
            resultado = "jugador 2";
        } else if (jugador2S === 2 && jugador1S === "piedra") {
            resultado = "jugador 2";
        } else if (jugador2S === 2 && jugador1S === "tijeras") {
            resultado = "jugador 1";
        } else if (jugador2S === 3 && jugador1S === "piedra") {
            resultado = "jugador1";
        } else if (jugador2S === 3 && jugador1 === "papel") {
            resultado = "jugador 2";
        }

        // Aplicar filtros invertidos según la selección de jugador 2
        aplicarFiltroJugador2(jugador2S);

        // Mostrar el resultado
        crearAdvertenciaGanador(resultado);
    }
});

function aplicarFiltroJugador2(jugador2S) {
    // Reiniciar todos los filtros antes de aplicar el filtro invertido
    reiniciarFiltros();

    // Aplicar el filtro invertido según la selección de jugador 2
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
    // Eliminar cualquier mensaje anterior
    const mensajesAnteriores = contenedor.querySelectorAll(".mensaje-ganador");
    mensajesAnteriores.forEach((mensaje) => {
        mensaje.remove();
    });
}

function crearAdvertenciaGanador(resultado) {
    const ganador = document.createElement("div");
    ganador.classList.add("mensaje-ganador"); // Agregar una clase para identificar mensajes anteriores
    const mensaje = document.createElement("h3");

    mensaje.innerHTML = `El ganador es ${resultado}`;
    ganador.appendChild(mensaje);
    contenedor.appendChild(ganador);
}
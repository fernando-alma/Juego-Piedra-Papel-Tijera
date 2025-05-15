// Variables para llevar el puntaje de jugador y computadora
let puntosJugador = 0, puntosComputadora = 0;

// Selección de elementos del DOM para interactuar con los botones y mostrar resultados
const botones = document.querySelectorAll('.botones button');
const resultado = document.getElementById('resultado');
const puntosJugadorElem = document.getElementById('puntos-jugador');
const puntosComputadoraElem = document.getElementById('puntos-computadora');

// Agregar eventos a los botones para jugar y reiniciar el juego
botones.forEach(boton => boton.addEventListener('click', () => jugar(boton.id)));
document.getElementById('reiniciar').addEventListener('click', reiniciarJuego);

// Función para obtener una elección aleatoria de la computadora
function obtenerEleccionComputadora() {
    // Devuelve una opción aleatoria entre 'piedra', 'papel' y 'tijeras'
    return ['piedra', 'papel', 'tijeras'][Math.floor(Math.random() * 3)];
}

// Función principal para jugar una ronda
function jugar(eleccionJugador) {
    // Obtener la elección de la computadora
    const eleccionComputadora = obtenerEleccionComputadora();
    // Mostrar las elecciones de jugador y computadora
    resultado.innerHTML = `Tú: <strong>${eleccionJugador}</strong> | Computadora: <strong>${eleccionComputadora}</strong><br>`;
    
    // Determinar el resultado de la ronda
    if (eleccionJugador === eleccionComputadora) {
        // Caso de empate
        resultado.innerHTML += '¡Empate!';
    } else if (
        // Casos en los que el jugador gana
        (eleccionJugador === 'piedra' && eleccionComputadora === 'tijeras') ||
        (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
        (eleccionJugador === 'tijeras' && eleccionComputadora === 'papel')
    ) {
        resultado.innerHTML += '¡Ganaste!';
        // Incrementar y mostrar el puntaje del jugador
        puntosJugadorElem.textContent = ++puntosJugador;
    } else {
        // Caso en el que la computadora gana
        resultado.innerHTML += '¡Perdiste!';
        // Incrementar y mostrar el puntaje de la computadora
        puntosComputadoraElem.textContent = ++puntosComputadora;
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Reiniciar los puntajes a 0
    puntosJugador = puntosComputadora = 0;
    // Actualizar los elementos del DOM con los puntajes reiniciados
    puntosJugadorElem.textContent = puntosComputadoraElem.textContent = 0;
    // Restablecer el mensaje de resultado
    resultado.textContent = 'Esperando tu elección...';
}
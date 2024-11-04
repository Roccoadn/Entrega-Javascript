// [ok] Variables
// [ok] Condicionales
// [ok] Bucles
// [ok] Funciones 
// [ok] Arrays

// Idea: juego de Trivia.

// Objetivo: 5 preguntas, 3 opciones de respuesta para cada una. Cada vez que se termina una fase de 5 preguntas, preguntar si quiere volver a jugar y que acceda a la fase 2 y sean preguntas mas dificiles. 
// Al final de cada fase muestra cuantas preguntas acerto el usuario.

// Array con las respuestas correctas

// Juego de Trivia

// Preguntas y respuestas de la Fase 1
let preguntasFase1 = [
    "¿Cuál es el país más grande del mundo por superficie?\n 1. Estados Unidos\n 2. Argentina\n 3. Rusia",
    "¿Quién pintó la Mona Lisa?\n 1. Vincent van Gogh\n 2. Leonardo da Vinci\n 3. Pablo Picasso",
    "¿Cuál es el planeta más cercano al sol?\n 1. Venus\n 2. Mercurio\n 3. Marte",
    "¿Cuál es el océano más grande de la Tierra?\n 1. Océano Atlántico\n 2. Océano Índico\n 3. Océano Pacífico",
    "¿Cuál es el animal terrestre más rápido del mundo?\n 1. León\n 2. Guepardo\n 3. Caballo"
];

let respuestasFase1 = [3, 2, 2, 3, 2];

// Preguntas y respuestas de la Fase 2
let preguntasFase2 = [
    "¿En qué año llegó el hombre a la Luna?\n 1. 1965\n 2. 1969\n 3. 1972",
    "¿Cuál es el elemento químico con símbolo O?\n 1. Oxígeno\n 2. Oro\n 3. Osmio",
    "¿Quién escribió 'Cien años de soledad'?\n 1. Gabriel García Márquez\n 2. Julio Cortázar\n 3. Mario Vargas Llosa",
    "¿Cuál es el río más largo del mundo?\n 1. Amazonas\n 2. Nilo\n 3. Yangtsé",
    "¿Cuál es la montaña mas alta del mundo?\n 1. Monte Everest\n 2. Los Andes\n 3. Monte Fuji"
];

let respuestasFase2 = [2, 1, 1, 1, 1];


function numberNoString(mensaje) {
    let respuesta;
    do {
        respuesta = prompt(mensaje);
        if (isNaN(respuesta)) {
            alert("¡Tenés que escribir un número!");
        }
    } while (isNaN(respuesta));
    return Number(respuesta);
}


// Función para jugar una fase de preguntas
function jugarFase(preguntas, respuestas) {
    let aciertos = 0;

    for (let i = 0; i < preguntas.length; i++) {
        let respuestaUsuario = numberNoString(preguntas[i]);
        if (respuestaUsuario === respuestas[i]) {
            aciertos++;
            alert("¡Correcto!");
        } else {
            alert("Incorrecto.");
        }
    }
    return aciertos;
}

// Juego de trivia principal
function jugarTrivia() {
    alert("Bienvenido a Trivia.com!");

    let aciertosFase1 = jugarFase(preguntasFase1, respuestasFase1);
    alert("Terminaste la Fase 1.\n  Aciertos: " + aciertosFase1 + " de 5");

    if (confirm("Queres jugar la Fase 2 con preguntas mas dificiles?")) {
        let aciertosFase2 = jugarFase(preguntasFase2, respuestasFase2);
        alert("Terminaste la Fase 2.\n  Aciertos: " + aciertosFase2 + " de 5");
    } else {
        alert("Gracias por participar!");
    }
}

jugarTrivia();


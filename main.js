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
let pregunta1F1 = "¿Cuál es el país más grande del mundo por superficie?\n 1. Estados Unidos\n 2. Argentina\n 3. Rusia";
let respuesta1F1 = 3;

let pregunta2F1 = "¿Quién pintó la Mona Lisa?\n 1. Vincent van Gogh\n 2. Leonardo da Vinci\n 3. Pablo Picasso";
let respuesta2F1 = 2;

let pregunta3F1 = "¿Cuál es el planeta más cercano al sol?\n 1. Venus\n 2. Mercurio\n 3. Marte";
let respuesta3F1 = 2;

let pregunta4F1 = "¿Cuál es el océano más grande de la Tierra?\n 1. Océano Atlántico\n 2. Océano Índico\n 3. Océano Pacífico";
let respuesta4F1 = 3;

let pregunta5F1 = "¿Cuál es el animal terrestre más rápido del mundo?\n 1. León\n 2. Guepardo\n 3. Caballo";
let respuesta5F1 = 2;

// Preguntas y respuestas de la Fase 2
let pregunta1F2 = "¿En qué año llegó el hombre a la Luna?\n 1. 1965\n 2. 1969\n 3. 1972";
let respuesta1F2 = 2;

let pregunta2F2 = "¿Cuál es el elemento químico con símbolo O?\n 1. Oxígeno\n 2. Oro\n 3. Osmio";
let respuesta2F2 = 1;

let pregunta3F2 = "¿Quién escribió Cien años de soledad?\n 1. Gabriel García Márquez\n 2. Julio Cortázar\n 3. Mario Vargas Llosa";
let respuesta3F2 = 1;

let pregunta4F2 = "¿Cuál es el río más largo del mundo?\n 1. Amazonas\n 2. Nilo\n 3. Yangtsé";
let respuesta4F2 = 1;

let pregunta5F2 = "¿Cuál es la montaña más alta del mundo?\n 1. Monte Everest\n 2. Los Andes\n 3. Monte Fuji";
let respuesta5F2 = 1;

// Funcion para jugar una fase de 5 preguntas
function jugarFase(pregunta1, respuesta1, pregunta2, respuesta2, pregunta3, respuesta3, pregunta4, respuesta4, pregunta5, respuesta5) {
    let aciertos = 0;

    let respuestaUsuario1 = Number(prompt(pregunta1));
    aciertos++;
    if (respuestaUsuario1 === respuesta1) {
        alert("¡Correcto!");
    } else {
        alert("Incorrecto.");
    }

    let respuestaUsuario2 = Number(prompt(pregunta2));
    if (respuestaUsuario2 === respuesta2) {
        aciertos++;
        alert("¡Correcto!");
    } else {
        alert("Incorrecto.");
    }

    let respuestaUsuario3 = Number(prompt(pregunta3));
    if (respuestaUsuario3 === respuesta3) {
        aciertos++;
        alert("¡Correcto!");
    } else {
        alert("Incorrecto.");
    }

    let respuestaUsuario4 = Number(prompt(pregunta4));
    if (respuestaUsuario4 === respuesta4) {
        aciertos++;
        alert("¡Correcto!");
    } else {
        alert("Incorrecto.");
    }

    let respuestaUsuario5 = Number(prompt(pregunta5));
    if (respuestaUsuario5 === respuesta5) {
        aciertos++;
        alert("¡Correcto!");
    } else {
        alert("Incorrecto.");
    }

    return aciertos;
}

// Juego de trivia principal
function jugarTrivia() {
    alert("Bienvenido a Trivia.com!");

    let aciertosFase1 = jugarFase(pregunta1F1, respuesta1F1, pregunta2F1, respuesta2F1, pregunta3F1, respuesta3F1, pregunta4F1, respuesta4F1, pregunta5F1, respuesta5F1);
    alert("Terminaste la Fase 1.\n Aciertos: " + aciertosFase1 + " de 5");

    if (confirm("¿Queres jugar la Fase 2 con preguntas mas dificiles?")) {
        let aciertosFase2 = jugarFase(pregunta1F2, respuesta1F2, pregunta2F2, respuesta2F2, pregunta3F2, respuesta3F2, pregunta4F2, respuesta4F2, pregunta5F2, respuesta5F2);
        alert("Terminaste la Fase 2.\n Aciertos: " + aciertosFase2 + " de 5");
    } else {
        alert("Gracias por participar");
    }
}

jugarTrivia();


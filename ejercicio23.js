/*23. Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil
expresada en kilómetros por hora, proporcione la velocidad en metros por
segundo.*/

// Solicitar al usuario que ingrese la velocidad en kilómetros por hora
let velocidad_km_h = parseFloat(prompt("Ingrese la velocidad del automóvil en kilómetros por hora:"));

// Convertir la velocidad de km/h a m/s
let velocidad_m_s = velocidad_km_h * (1000 / 3600);

// Mostrar la velocidad convertida en metros por segundo
alert(`La velocidad del automóvil es de ${velocidad_m_s} metros por segundo.`);

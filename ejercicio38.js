/*38. Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final
del año. Martín toma 2/3 del total, Jairo un cuarto del total, y Lorena se queda con
el resto. ¿Qué parte le corresponde a Lorena?*/

let totalTapas = 100;

let parteMartinyJairo = (2/3 + 1/4) * totalTapas;

let parteLorena = totalTapas - parteMartinyJairo;

alert(`A Lorena le corresponde ${parteLorena} tapas de gaseosas.`);

// 1. Completa la función para retorne el "grade" correspondiente de acuerdo al "score".
// Las condiciones son: 
// a. Si "score" es mayor a 25 y menor o igual a 30, retorne "A"
// b. Si "score" es mayor a 20 y menor o igual a 25, retorne "B"
// c. Si "score" es mayor a 15 y menor o igual a 20, retorne "C"
// d. Si "score" es mayor a 10 y menor o igual a 15, retorne "D"
// e. Si "score" es mayor a 5 y menor o igual a 10, retorne "E"
// f. Si "score" es mayor a 0 y menor o igual a 5, retorne "F"
// g. de lo cantrario retornar 'Sin nota'
const getGrade = (score) => {
  if (score > 25 && score <= 30) {
    return "A";
  } else if (score > 20 && score <= 25) {
    return "B";
  } else if (score > 15 && score <= 20) {
    return "C";
  } else if (score > 10 && score <= 15) {
    return "D";
  } else if (score > 5 && score <= 10) {
    return "E";
  } else if (score >= 0 && score <= 5) {
    return "F";
  } else {
    return 'Sin nota';
  }
};

// 2. Crear una función llamada factorial que tenga un parámetro de tipo integer (n) y que retorne el factorial del número n
// Ejemplo de factorial => 4! = 4 x 3 x 2 x 1 = 24.
//                      => 5! = 5 x 4 x 3 x 2 x 1 = 120.

const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1; 
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
};

// 3. Crear una función llamada getSecondLargest que tenga como parámetro un array de números y que retorne el segundo valor más grande. 
// Ejemplo: [3, 5, 6, 6, 2] => retorna el 5.

const getSecondLargest = (arr) => {
  if (arr.length < 2) {
    return 'No hay segundo valor más grande';
  }

  const uniqueSortedArray = Array.from(new Set(arr)).sort((a, b) => b - a);

  if (uniqueSortedArray.length >= 2) {
    return uniqueSortedArray[1];
  } else {
    return 'No hay segundo valor más grande';
  }
};

// 4. Completar la siguiente función para que calcule el área o el perímetro de un rectángulo teniendo en cuenta los parámetros "a" y "b".
// Usar el parámetro type para saber si calcular el perímetro o el área. Si no viene nada en este parámetro, calcular el área por defecto.
const rectangle = (a, b, type = "area") => {
  if (type === "area") {
    return a * b;
  } else if (type === "perimeter") {
    return 2 * (a + b); 
  } else {
    return "Tipo de cálculo no válido";
  }
};

// 5. Dado el siguiente array de objectos, imprimir en consola los objetos donde X y Y tengan el mismo valor. 
let exercise5 = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 }
];

for (let i = 0; i < exercise5.length; i++) {
  if (exercise5[i].x === exercise5[i].y) {
    console.log(exercise5[i]);
  }
}

/// otra forma 

exercise5.forEach(obj => {
  if (obj.x === obj.y) {
    console.log(obj);
  }
});
// 6. De acuerdo a la siguiente estructura de datos, resolver:
// a. Crear una función que tenga como parámetro el id de un reto (Ej: challenge1) y retorne los puntos de todos los pasos que pertenencen a ese reto.
// b. Crear una función que tenga como parámetro (Ej: paso 1a) el nombre del paso a encontrar y que retorne el objeto complejo. 
//    Ejemplo de respuesta: { id: 1, nombre: 'paso 1a', puntos: 60,  tipo: 'type1' }
// c. Crear una función que tenga como parámetro el tipo (Ej: type1) y que retorne un arreglo con todos los pasos que tengan ese tipo.

let retos = [
  { 
    id: 'challenge1',
    pasos: [
      { id: 1, nombre: 'paso 1a', puntos: 60,  tipo: 'type1' },
      { id: 2, nombre: 'paso 1b', puntos: 10,  tipo: 'type2' },
      { id: 3, nombre: 'paso 1c', puntos: 0,   tipo: 'type3' },
      { id: 4, nombre: 'paso 1d', puntos: 20,  tipo: 'type2' },
      { id: 5, nombre: 'paso 1e', puntos: 5,   tipo: 'type3' },
      { id: 6, nombre: 'paso 1f', puntos: 15,  tipo: 'type1' },
      { id: 7, nombre: 'paso 1g', puntos: 100, tipo: 'type1' }
    ]
  },
  {
    id: 'challenge2',
    pasos: [
      { id: 1, nombre: 'paso 2a', puntos: 30, tipo: 'type3' },
      { id: 2, nombre: 'paso 2b', puntos: 25, tipo: 'type2' },
      { id: 3, nombre: 'paso 2c', puntos: 90, tipo: 'type4' },
      { id: 4, nombre: 'paso 2d', puntos: 30, tipo: 'type1' },
      { id: 5, nombre: 'paso 2e', puntos: 10, tipo: 'type1' },
      { id: 6, nombre: 'paso 2f', puntos: 0,  tipo: 'type2' },
      { id: 7, nombre: 'paso 2g', puntos: 10, tipo: 'type3' }
    ]
  },
  {
    id: 'challenge3',
    pasos: [
      { id: 1, nombre: 'paso 3a', puntos: 10, tipo: 'type4' },
      { id: 2, nombre: 'paso 3b', puntos: 20, tipo: 'type4' },
      { id: 3, nombre: 'paso 3c', puntos: 30, tipo: 'type2' },
      { id: 4, nombre: 'paso 3d', puntos: 40, tipo: 'type1' },
      { id: 5, nombre: 'paso 3e', puntos: 30, tipo: 'type3' },
      { id: 6, nombre: 'paso 3f', puntos: 20, tipo: 'type3' },
      { id: 7, nombre: 'paso 3g', puntos: 10, tipo: 'type3' }
    ]
  }
];

// A

function getPuntosPorReto(idReto) {
  const reto = retos.find(reto => reto.id === idReto);
  
  if (reto) {
    return reto.pasos.map(paso => paso.puntos);
  } else {
    return 'Reto no encontrado';
  }
}

console.log(getPuntosPorReto('challenge1')); 

// B

function encontrarPasoPorNombre(nombrePaso) {
  for (const reto of retos) {
    const pasoEncontrado = reto.pasos.find(paso => paso.nombre === nombrePaso);
    if (pasoEncontrado) {
      return pasoEncontrado;
    }
  }
  return 'Paso no encontrado';
}

console.log(encontrarPasoPorNombre('paso 1a')); 

// C

function getPasosPorTipo(tipo) {
  const pasosPorTipo = [];
  for (const reto of retos) {
    const pasos = reto.pasos.filter(paso => paso.tipo === tipo);
    pasosPorTipo.push(...pasos);
  }
  return pasosPorTipo;
}

console.log(getPasosPorTipo('type1')); 

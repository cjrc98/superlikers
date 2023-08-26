// 1. Completa la función para retorne el "grade" correspondiente de acuerdo al "score".
// Las condiciones son: 
// a. Si "score" es mayor a 25 y menor o igual a 30, retorne "A"
// b. Si "score" es mayor a 20 y menor o igual a 25, retorne "B"
// c. Si "score" es mayor a 15 y menor o igual a 20, retorne "C"
// d. Si "score" es mayor a 10 y menor o igual a 15, retorne "D"
// e. Si "score" es mayor a 5 y menor o igual a 10, retorne "E"
// f. Si "score" es mayor a 0 y menor o igual a 5, retorne "F"
// g. de lo cantrario retornar 'Sin nota'
const getGrade = (score) => {}

// 2. Crear una función llamada factorial que tenga un parámetro de tipo integer (n) y que retorne el factorial del número n
// Ejemplo de factorial => 4! = 4 x 3 x 2 x 1 = 24.
//                      => 5! = 5 x 4 x 3 x 2 x 1 = 120.

// 3. Crear una función llamada getSecondLargest que tenga como parámetro un array de números y que retorne el segundo valor más grande. 
// Ejemplo: [3, 5, 6, 6, 2] => retorna el 5.

// 4. Completar la siguiente función para que calcule el área o el perímetro de un rectángulo teniendo en cuenta los parámetros "a" y "b".
// Usar el parámetro type para saber si calcular el perímetro o el área. Si no viene nada en este parámetro, calcular el área por defecto.
const rectangle = (a, b, type) => {}

// 5. Dado el siguiente array de objectos, imprimir en consola los objetos donde X y Y tengan el mismo valor. 
let exercise5 = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 }
];

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

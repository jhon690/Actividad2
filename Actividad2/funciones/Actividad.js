/* Ejercicio 1.
Escriba una función que retorne la suma de una serie de X número repetido hasta el n-ésimo término. Ejemplos:
Entrada : numero=3, terminos=5
Salida : 37035 #(3 + 33 + 333 + 3333 + 33333)
Entrada : numero=5, terminos=3
Salida : 615 #(5 + 55 + 555)
*/

// Solucion 

// Se define la funcion y se le dan dos parametros a este  
function Serie1(num, series) {
    // Se dan dos variables la cual lleva la suma de la serie y llevar el termino de esta
    let suma = 0;
    let ser = 0;
    // El bucle for el cual genera cada termino de la suma, mientras este va avanzando se da la variable i con valor 0 
    // Se utiliza la viable i menor que series y que este se incremente
    for (let i = 0; i < series; i++) {
        // Se utiliza la variable ser que sea multiplicado por 10 para que este se corra y que se sume con num 
        ser = ser * 10 + num;
      // Se usa la suma con el parametro que lo sume a la variabel ser
      suma += ser;
    }
    // Que muestre la variable suma
    return suma;
  }
// Que lo muestre en la consola de la pagina
console.log(Serie1(6, 4)); 


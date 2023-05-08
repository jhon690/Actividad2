/* Dada una lista de cualquier longitud de entrada, escriba una función para agrupar los elementos similares en una matriz
de salida (no importa el orden). Ejemplos:
Entrada : list = [12, 25, 1, 1, 7, 25]
Salida : [[12], [7], [25, 25], [1, 1]]
Entrada : list = [6, 7, 8, 9]
Salida : [[6], [7], [8], [9]]
 */

// Solucion


// Se le da un nombre a la funcion y unos parametros llamado list
function Similar(list) {
    // se crea una lista vacia 
    let count = {};
    // Bucle for con variable i con 0 length que son los argumentos y que lo incremente 
    for (let i = 0; i < list.length; i++) {
        // se crea una variable elemento con la lista para ver cuantas veces esta el numero 
      let element = list[i];
      // se realiza la verificacion del numero
      if (count[element] === undefined) {
        // si el elemento no esta se crea un grupo solo
        count[element] = 1;
        // En caso de que este si este se agrega al grupo
      } else {
        count[element]++;
      }
    }
    // se crea una variable de resultado para agregar los numeros agrupados
    let result = [];
    // se itera las cuentas de los numeros
    for (let key in count) {
        // se crea un grupo 
      let group = [];
      // Se realiza la agregacion del numero al grupo con la cnatidad de veces que este este
      for (let i = 0; i < count[key]; i++) {
        group.push(parseInt(key));
      }
      // se agrega a la vairable de resultado
      result.push(group);
    }
    // que retorne resultado 
    return result;
  }

  // se pasa la variable listar  con los parametros seguidamente se llama la funcion y este muestra el resultado por grupos
  let Listar = [40, 30, 5, 5, 10, 40];
let Resultado = Similar(Listar);
console.log(Resultado); 

/* Escriba una función que retorne en una lista de salida, solo aquellos números de una lista de entrada que satisfagan las
siguientes condiciones:
1. El número debe ser divisible por cinco.
2. Si el número es mayor que 600, no se incluye en la salida.
3. Si el número es mayor que 1000, detenga el procesamiento y retorne el resultado.
*/ 

// Solucion 

// Se da el nombre de la variable y un parametro llamado lsita
function Condiciones(lista) {
    // Se crea una lista vacia la cual se usa para que guarde los numeros que cumplen las condiciones
    const datos = [];
    // Se genero un bucle for que realiza la funcion del num en al lista
    for (const num of lista) {
        // if es donde se da los paramaetros lo primero es que el numero sea divisible por 5              
        // Que tambien no sea mayor que 600 
      if (num % 5 === 0 && num <= 600) {
        // Si estas condiciones se cumplen este se agrega a la lista
        datos.push(num);
        // Si el numero es mayor a 1000 se termina el proceso y este no muestra mas numero en adelante 
      } else if (num > 1000) {
        // que regrese la variable datos de la funcion
        return datos;
      }
    }
    // que regrese la variable datos
    return datos;
  }
// los aprametros y que se muestre en la consola de la pagina
  console.log(Condiciones([830, 450, 100, 550, 900, 1240, 20]));

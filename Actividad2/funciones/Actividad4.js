/* En un negocio reciben periódicamente productos para la venta, se requiere desarrollar un programa de consola (o
    terminal) que cumpla con los siguientes requerimientos:
    1. Se requiere organizar el inventario en los siguientes grupos: dairy, cleaning y grain.
    2. Cada grupo tiene que estar asociado a un elemento de otra lista que almacena las existencias de ese grupo en la
    misma posición, como en el siguiente ejemplo:
    dairy_products = [“Fairlife Milk”, “Alta Dena Milk”, “Queensland Butter”]
    dairy_stock = [28, 36, 50]
    En donde, por ejemplo, el producto del grupo dairy “Alta Dena Milk” tiene una existencia de 36 unidades.
    3. Para un producto entrante, se debe poder registrar en el sistema: el nombre del producto, la cantidad y el grupo
    al que pertenece.
    Globaltek Development S.A - Programación Básica -Juan C. Hernández, Oct 2022
    4. Si el producto no existe en la lista, se debe agregar al final con su cantidad entrante, pero si existe se debe
    actualizar el número de existencias sumando la nueva cantidad.
    5. El programa debe permitir visualizar todo el inventario de productos y existencias. */


// Objeto para crear y almacenar los productos del inventario
const inventario = {
    lacteos: {
      productos: ["Queso Americano", "Leche La Martona  ", "Mantequilla Gustosita"],
      Lote: [10, 40, 30]
    },
    limpieza: {
      productos: ["Clorox", "Polvo Ariel", "Papel Elite"],
      Lote: [12, 5, 12]
    },
    granos: {
      productos: ["Arroz Diana", "Lentejas Diana", "Frijoles Diana"],
      Lote: [20, 18, 6]
    }
  };
  
  //  Registro de un producto con unos parametros 
  function registrarProducto(nombre, cantidad, grupo) {
    // Verificacion de si el grupo existe en el inventario con la funcion hasOwnProperty
    if (inventario.hasOwnProperty(grupo)) {
      const grupoLote = inventario[grupo].Lote;
      const grupoProductos = inventario[grupo].productos;
      // Busqueda del producto en el grupo
      const indiceProducto = grupoProductos.indexOf(nombre);
      if (indiceProducto !== -1) {
        // Si el producto ya existe, se suma la nueva cantidad al grupo
        grupoLote[indiceProducto] += cantidad;
      } else {
        // Si el producto no existe, se agrega al final del grupo con su cantidad
        grupoProductos.push(nombre);
        grupoLote.push(cantidad);
      }
    } else {
      console.log("El grupo especificado no existe en el inventario");
    }
  }
  
  // Función para ver todo el inventario
  function verInventario() {
    console.log("Inventario:");
    for (const grupo in inventario) {
      console.log(`- ${grupo}:`);
      const grupoProductos = inventario[grupo].productos;
      const grupoLote = inventario[grupo].Lote;
      // Se itera la funcion
      for (let i = 0; i < grupoProductos.length; i++) {
        // Agrupa las variables de forma constante  
        console.log(`  * ${grupoProductos[i]} - ${grupoLote[i]}`);
      }
    }
  }
  
  // Agregar producto
  registrarProducto("Queso Americano", 10, "lacteos");
  registrarProducto("Clorox", 5, "limpieza");

  // para que estos productos se agreguen quitar el comentario de abajo con lo signos /* */
  

  /* registrarProducto("Jabon", 20, "limpieza");
  registrarProducto("Rey", 5, "limpieza"); */


  // funcion para llamar el metodo y ver el inventario 
  verInventario();
  
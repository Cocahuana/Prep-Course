// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  /*
    function Clase(objeto){
      this.propiedad1 = objeto.propiedad1;
      this.propiedad2 = objeto.propiedad2;
      this.propiedad3 = objeto.propiedad3;
      this.propiedad4 = objeto.propiedad4;
    }

    Constructor.prototype.saludar = function() {
    return 'Hola, mi nombre es ' + this.nombre;
  };

  return Constructor;

    En este caso el Constructor es Usuario.
    El constructor es el "inicio" de una clase
  */
  function Usuario(opciones) {
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
  }

  Usuario.prototype.saludar = function() {
    return 'Hola, mi nombre es ' + this.nombre;
  };

  return Usuario;

  }

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function (){
    return "Hello World!";
  };
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"


  //Lo 1ro es agregar el metodo reverse al prototype de la clase (o constructor) String
  String.prototype.reverse = function (){
    //Ahora creamos una variable cuyo contenido en string es vacio para almacenar
    //la palabra que queremos devolver inversa
    var stringInvertida = '';
    // Contamos desde la ultima letra (i = this.length - 1)
    // Hasta la primera (i >= 0)
    // Y lo contamos en reversa (i--)
    for(let i = this.length - 1; i >= 0; i--){
      // Guardamos en nuestra string vacia los caracteres obtenidos en this.charAt(i)
      stringInvertida += this.charAt(i);
    }
    return stringInvertida; // Devolvemos la string invertida :D
  };
  /*
  El método charAt(indice) obtiene el caracter (indice) de un string
  Si tenemos una palabra "manzana" y ubicamos el charAt(3), obtendremos la letra 'z'
  Los caracteres de una cadena se indexan de izquierda a derecha. 
  El índice del primer caracter es 0, y el índice del último caracter 
  en una cadena llamada nombreCadena es nombreCadena.length - 1. 
  Si el indice que usted proporciona está fuera del rango, JavaScript 
  devuelve una cadena vacía.*/
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }
    // Creamos el constructor de la clase Persona (class Persona)
    class Persona {
      // Le agregamos al constructor sus propiedades: 
      constructor(nombre, apellido, edad, domicilio) {
        // Tu código:
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.domicilio = domicilio
        // Creamos el método detalle
        this.detalle = function() {
          // Devolvemos las propiedades de las personas y con this.propiedad --> sus valores
          return { 
            Nombre: this.nombre,
            Apellido: this.apellido,
            Edad: this.edad,
            Domicilio: this.domicilio
          }
        }
      }
    }
    
function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  const PERSONA = new Persona(nombre, apellido, edad, domicilio);
  return PERSONA;
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function(){
    return this.nombre + ", " + this.edad + " años";
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};

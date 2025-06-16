console.log("HOLA PROFE")
//alert("HOLA PROFE")
//document.body.innerHTML = "<h1> HOLA QUERIDO PROFE<h1>"


// VARIABLES EN JS
const edad = 18;//Constante que no puede ser alterada
let edad_dos = 18;//Variable para bloques
var nombre = "Wilmar Clavijo" //Variable global



//TIPOS DE DATOS entero/decimal, string, booleanos, arrays
var entero = 20;
var decimal = 20.5;
var string = "MI NOMBRE ES WILMAR"
var boolean = true //false
var array_string = ["Lun", "Mar", "Mier","Jue", "Vier","Sab", "Dom"];
var array_numerico = [1, 2, 3, 4, 5];
var array_mixto = [1, 2, 3, "Lun", "Mar", false, true];



// TIPO DE VARIABLES Pascalcasa, Camalcase, sanke_casa


//OPERADORES ARITMETICOS = +, -, /, %
var suma = entero + decimal;
var resta = decimal - entero;
var multi = decimal * entero;
var divi = decimal / entero;
var modulo = decimal / 2;


//ESTRUCTURAS LOGICAS
//Inicializador - comparacion - contador
var impresion = "";
for(let i= 0; i< array_string.length; i++) {
    console.log(array_string[i])
    impresion = impresion + array_string[i]
    
}


    document.addEventListener("DOMContentLoaded", function () {
      const form = document.querySelector("form");

      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se recargue la página

        // Mostrar la alerta de SweetAlert2
        Swal.fire({
          title: "¡Bienvenido!",
          text: "Has entrado correctamente.",
          icon: "success",
          confirmButtonText: "Aceptar"
        });
      });
    });
  



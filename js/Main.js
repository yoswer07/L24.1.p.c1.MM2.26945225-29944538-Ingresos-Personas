/* Dado el nombre, sexo (F-M) y el ingreso de varias personas. Determinar e imprimir:
promedio de ingreso de las mujeres, el monto de ingreso mayor y quien lo tiene.
Se dispone de los siguientes datos de varias personas: (nombre, sexo, ingreso) (Mary, F,
150), (José, M, 135), (Carlos, M, 160), (Pedro, M, 75), (Rosa, F, 120), (Carmen, F, 120)  */

import Cl_Persona from "./Cl_Persona.js";
import Cl_TodoPersona from "./Cl_TodoPersona.js";

//instanciar el objeto
let persona = new Cl_Persona("Mary", 'F', 150);
let persona2 = new Cl_Persona("Jose", 'M', 135);
let persona3 = new Cl_Persona("Carlos", 'M', 160);
let persona4 = new Cl_Persona("Pedro", 'M', 75);
let persona5 = new Cl_Persona("Rosa", 'F', 120);
let persona6 = new Cl_Persona("Carmen", 'F', 120);


let todoPersona = new Cl_TodoPersona();
todoPersona.procesarPersona(persona);
todoPersona.procesarPersona(persona2);
todoPersona.procesarPersona(persona3);
todoPersona.procesarPersona(persona4);
todoPersona.procesarPersona(persona5);
todoPersona.procesarPersona(persona6);

//salida solicitada
let salida = document.getElementById('Salida');
salida.innerHTML = 'Resultados'
salida.innerHTML += '<br> Promedio de ingreso de las mujeres: ' + todoPersona.devolverPromedioMujeres() + '$';
salida.innerHTML += '<br> Nombre de la persona con mayor ingreso: ' + todoPersona.devolverNombreMayor() + ' con un ingreso de ' + todoPersona.devolverIngresoMayor() + '$';
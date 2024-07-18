export default class Cl_Persona {
  constructor() {
    this.acumMujeres = 0;
    this.contMujeres = 0;
    this.auxIngreso = 0;
    this.nombreMayor = '';
  }

  //metodos
  procesarPersona(per) {
    if (per.sexo == 'F') {
      this.acumMujeres += per.ingreso;
      this.contMujeres++;
    }
    if (per.ingreso > this.auxIngreso) {
      this.auxIngreso = per.ingreso;
      this.nombreMayor = per.nombre;
    }
  }
  devolverPromedioMujeres() {
    return this.acumMujeres / this.contMujeres;
  }
  devolverNombreMayor() {
    return this.nombreMayor;
  }
  devolverIngresoMayor() {
    return this.auxIngreso;
  }
}

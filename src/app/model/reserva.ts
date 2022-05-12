import { Time } from "@angular/common";
import { Laboratorio } from "./laboratorio";

export class Reserva{
  nomeSolicitante: string;
  data: Date;
  horaInicio: Time ;
  horaFinal: Time ;
  laboratorio: Laboratorio;

  constructor(nomeSolicitante: string, data: Date, horaInicio: Time, horaFinal: Time, laboratorio: Laboratorio){
    this.nomeSolicitante= nomeSolicitante;
    this.data= data;
    this.horaInicio= horaInicio;
    this.horaFinal= horaFinal;
    this.laboratorio= laboratorio;

  }

}

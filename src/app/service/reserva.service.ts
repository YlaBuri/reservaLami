import { Time } from '@angular/common';
import { Reserva } from './../model/reserva';
import { Injectable } from '@angular/core';
import { timestamp } from 'rxjs';
import { Laboratorio } from '../model/laboratorio';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  reservas : Reserva[]=[
  ]

  constructor() { }

  listarTodos(){
    return this.reservas;
  }

  salvarReserva(reserva: Reserva){
    this.reservas.push(reserva);
  }
}

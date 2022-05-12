import { Reserva } from './../model/reserva';
import { Laboratorio } from './../model/laboratorio';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {
  busca!: Laboratorio;
  laboratorios: Laboratorio[] = [
    {id:1, nome: "LAMI 1"},
    {id:2, nome: "LAMI 2"},
    {id:3, nome: "LAMI 3"},
    {id:4, nome: "LAMI 4"},
    {id:5, nome: "LAMI 5"},
    {id:6, nome: "LAMI 6"},
  ];

  constructor() { }

  listarTodos(){
    return this.laboratorios;
  }

  buscarPorId(id: number){
    this.laboratorios.forEach(element => {
      if(element.id == id){
        this.busca =  element;
      }
    });
    return this.busca;
  }
}

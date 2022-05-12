import { ReservaService } from './../service/reserva.service';
import { Reserva } from './../model/reserva';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit {


  constructor(private reservaService: ReservaService) { }

  @Input() reservas: Reserva[] = []

  ngOnInit(): void {
    this.reservas = this.reservaService.listarTodos();
  }

}

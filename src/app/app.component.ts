import { Component } from '@angular/core';
import { Reserva } from './model/reserva';
import { ReservaService } from './service/reserva.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reservaLami';

  constructor(private reservaService: ReservaService){

  }

  reservar($event: Reserva){
    this.reservaService.salvarReserva($event);
  }
}

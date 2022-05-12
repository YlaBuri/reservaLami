import { Reserva } from './../model/reserva';
import { ReservaService } from './../service/reserva.service';
import { Time } from '@angular/common';
import { Laboratorio } from './../model/laboratorio';
import { LaboratorioService } from './../service/laboratorio.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-reserva',
  templateUrl: './cadastrar-reserva.component.html',
  styleUrls: ['./cadastrar-reserva.component.css']
})
export class CadastrarReservaComponent implements OnInit {
  @Output() agendar = new EventEmitter<any>();
  constructor(private laboratorioService: LaboratorioService,
    private reservaService: ReservaService) { }

  lamis: Laboratorio[] = [];
  formLami: any;
  submitted: boolean = false;
  horarioInvalido: boolean = false;
  dataInvalida: boolean = false;

  ngOnInit(): void {
    this.lamis = this.laboratorioService.listarTodos();

    this.formLami = new FormGroup({
      nomeSolicitante: new FormControl('', Validators.required),
      laboratorio: new FormControl('',  Validators.required),
      dataReserva: new FormControl('',  Validators.required),
      horaInicial: new FormControl('',  Validators.required),
      horaFinal: new FormControl('',  Validators.required)
    });
  }


  agendarReserva(){
    this.submitted = true;
    const formulario = this.formLami.value;
    const laboratorio = this.laboratorioService.buscarPorId(formulario.laboratorio);
    const reserva = {nomeSolicitante: formulario.nomeSolicitante, data: formulario.dataReserva, horaInicio: formulario.horaInicial, horaFinal: formulario.horaFinal, laboratorio: laboratorio}

    if(this.formLami.valid &&  this.validarHora(reserva.horaInicio, reserva.horaFinal) && this.validarData(reserva)){
      console.log(reserva)
      this.agendar.emit(reserva);
      this.limparCampos();
    }
  }

  limparCampos(){
    this.submitted = false;
    this.formLami.controls['nomeSolicitante'].setValue("");
    this.formLami.controls['laboratorio'].setValue("");
    this.formLami.controls['dataReserva'].setValue("");
    this.formLami.controls['horaInicial'].setValue("");
    this.formLami.controls['horaFinal'].setValue("");
  }

  validarHora(hInicial: Time, hFinal: Time){
    if(hInicial > hFinal){
      this.horarioInvalido = true;
      return false;
    }else{
      this.horarioInvalido = false;
      return true;
    }
  }

  validarData(reserva: Reserva){
    const inicio = reserva.horaInicio;
    const fim = reserva.horaFinal;
    const reservas = this.reservaService.listarTodos()
    this.dataInvalida = false;
    reservas.forEach(r => {
      if(r.laboratorio.id == reserva.laboratorio.id && r.data == reserva.data){
        if((inicio > r.horaInicio && inicio < r.horaFinal) || (fim > r.horaInicio && fim < r.horaFinal)){
          this.dataInvalida = true;
        }
      }
    });

    if(this.dataInvalida){
      return false;
    }else{
    return true;
    }
  }

}

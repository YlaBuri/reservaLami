import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastrarReservaComponent } from './cadastrar-reserva/cadastrar-reserva.component';
import { ListarReservaComponent } from './listar-reserva/listar-reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarReservaComponent,
    ListarReservaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

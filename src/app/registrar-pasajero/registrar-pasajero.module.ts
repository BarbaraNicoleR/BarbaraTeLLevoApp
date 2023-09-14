import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarPasajeroPageRoutingModule } from './registrar-pasajero-routing.module';

import { RegistrarPasajeroPage } from './registrar-pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Agrega ReactiveFormsModule aquí
    IonicModule,
    RegistrarPasajeroPageRoutingModule
  ],
  declarations: [RegistrarPasajeroPage]
})
export class RegistrarPasajeroPageModule {}

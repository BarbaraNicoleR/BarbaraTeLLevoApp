import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de que ReactiveFormsModule esté importado

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Agrega ReactiveFormsModule aquí
    IonicModule,
    InicioPageRoutingModule,
  ],
  declarations: [InicioPage],
})
export class InicioPageModule {}
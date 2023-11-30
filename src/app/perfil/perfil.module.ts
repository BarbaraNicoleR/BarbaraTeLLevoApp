// Importa IonicModule
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Asegúrate de importar IonicModule

import { PerfilPageRoutingModule } from './perfil-routing.module';
import { PerfilPage } from './perfil.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { UtilsService } from '../services/utils.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // Agrega IonicModule aquí
    PerfilPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [PerfilPage],
  providers: [UtilsService],
})
export class PerfilPageModule {}

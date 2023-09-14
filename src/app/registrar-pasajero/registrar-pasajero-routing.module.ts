import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarPasajeroPage } from './registrar-pasajero.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarPasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarPasajeroPageRoutingModule {}

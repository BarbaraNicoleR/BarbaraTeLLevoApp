import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'modificar-contrasena',
    loadChildren: () => import('./modificar-contrasena/modificar-contrasena.module').then( m => m.ModificarContrasenaPageModule)
  },
  {
    path: 'perfil-pasajero',
    loadChildren: () => import('./perfil-pasajero/perfil-pasajero.module').then( m => m.PerfilPasajeroPageModule)
  },
  {
    path: 'registrar-pasajero',
    loadChildren: () => import('./registrar-pasajero/registrar-pasajero.module').then( m => m.RegistrarPasajeroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

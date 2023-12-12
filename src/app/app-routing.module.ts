import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './guards/no-auth.guard';
import { AuthGuard } from './guards/auth.guard';
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
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule), canActivate:[NoAuthGuard]
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
    loadChildren: () => import('./perfil-pasajero/perfil-pasajero.module').then( m => m.PerfilPasajeroPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'registrar-pasajero',
    loadChildren: () => import('./registrar-pasajero/registrar-pasajero.module').then( m => m.RegistrarPasajeroPageModule)
  },

  { path: 'perfil', loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule) },  {
    path: 'crear-viaje',
    loadChildren: () => import('./crear-viaje/crear-viaje.module').then( m => m.CrearViajePageModule)
  },
  {
    path: 'historial-conductor',
    loadChildren: () => import('./historial-conductor/historial-conductor.module').then( m => m.HistorialConductorPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

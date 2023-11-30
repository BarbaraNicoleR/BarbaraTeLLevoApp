import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  //userData: any;

  constructor(private router:Router, public utilsSvc: UtilsService ) { }

  ngOnInit() {
    this.waitForUserData();
  }

  async waitForUserData() {
    // Lógica para esperar a que los datos del usuario estén disponibles
    // Esto podría ser una llamada a una función asincrónica que obtiene los datos del usuario
    try {
      // Lógica para obtener los datos del usuario
      const userData = await this.utilsSvc.getUserData(); // Asegúrate de tener esta función en UtilsService

      // Guardar datos en el LocalStorage
      this.utilsSvc.saveInLocalStorage('name', userData.name);
      this.utilsSvc.saveInLocalStorage('email', userData.email);
      this.utilsSvc.saveInLocalStorage('rol', userData.rol);

      // Imprimir datos en la consola para verificar
      console.log('Datos del usuario:', userData.name, userData.email, userData.rol);
    } catch (error) {
      console.error('Error al obtener datos del usuario:', error);
    }
  }
}
  
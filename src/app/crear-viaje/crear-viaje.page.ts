import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})
export class CrearViajePage {
  viaje = {
    origen: '',
    destino: '',
    valor: '',
    cantidadAsientos: '',
    fecha: '',
  };

  // Propiedad minDate declarada
  minDate: string = new Date().toISOString().split('T')[0];

  constructor(
    private firebaseSvc: FirebaseService,
    private toastController: ToastController
  ) {}

  async crearViaje() {
    try {
      console.log('Función crearViaje ejecutada');
      // Llama al servicio para agregar el viaje
      const viajeId = await this.firebaseSvc.agregarViaje(this.viaje);
      
      // Muestra un mensaje de éxito en verde y más notorio
      this.mostrarMensaje('Viaje agregado correctamente', 'success');

      console.log('Viaje agregado con ID:', viajeId);
      // Puedes realizar acciones adicionales después de agregar el viaje si es necesario
    } catch (error) {
      console.error('Error al agregar viaje:', error);

      // Muestra un mensaje de error en rojo y más notorio
      this.mostrarMensaje('Error al agregar viaje', 'danger');
    }
  }

  async mostrarMensaje(mensaje: string, color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000, // Duración del mensaje en milisegundos
      position: 'bottom', // Posición del mensaje (top, bottom, middle)
      color: color, // Color del mensaje (puedes usar 'success', 'danger', 'warning', etc.)
      animated: true,
      buttons: [
        {
          side: 'start',
          icon: 'checkmark',
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    toast.present();
  }
}
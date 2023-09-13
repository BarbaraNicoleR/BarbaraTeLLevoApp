import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular'; // Asegúrate de que esto esté correctamente importado
@Component({
  selector: 'app-modificar-contrasena',
  templateUrl: './modificar-contrasena.page.html',
  styleUrls: ['./modificar-contrasena.page.scss'],
})
export class ModificarContrasenaPage implements OnInit {
  modificarContrasenaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController // Agrega el AlertController
  ) {
    this.modificarContrasenaForm = this.formBuilder.group({
      claveProvisoria: ['', Validators.required],
      nuevaContrasena: ['', Validators.required],
      confirmarNuevaContrasena: ['', Validators.required],
    });
  }

  ngOnInit() { }

  async onSubmit() {
    if (this.modificarContrasenaForm.valid) {
      // Acceder a los valores del formulario
      const claveProvisoria = this.modificarContrasenaForm.value.claveProvisoria;
      const nuevaContrasena = this.modificarContrasenaForm.value.nuevaContrasena;
      const confirmarNuevaContrasena = this.modificarContrasenaForm.value.confirmarNuevaContrasena;


      console.log('Clave Provisoria:', claveProvisoria);
      console.log('Nueva Contraseña:', nuevaContrasena);
      console.log('Confirmar Nueva Contraseña:', confirmarNuevaContrasena);


      const alert = await this.alertController.create({
        header: 'Contraseña modificada!!!',
        message: 'La contraseña ha sido modificada con éxito.',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
}
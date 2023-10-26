import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registrar-pasajero',
  templateUrl: './registrar-pasajero.page.html',
  styleUrls: ['./registrar-pasajero.page.scss'],
})
export class RegistrarPasajeroPage implements OnInit {

  registrarPasajeroForm: FormGroup;
  

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController // Agrega el AlertController
  ) {
    this.registrarPasajeroForm = this.formBuilder.group({
      nombreCompleto: ['', Validators.required],
      correoElectronico: ['', Validators.required],
      nombreUsuario: ['', Validators.required],
      password: ['', Validators.required],
      
    });
  }

  ngOnInit() { }

  async onSubmit() {
    if (this.registrarPasajeroForm.valid) {
      // Acceder a los valores del formulario
      const nombreCompleto = this.registrarPasajeroForm.value.nombreCompleto;
      const correoElectronico = this.registrarPasajeroForm.value.correoElectronico;
      const nombreUsuario = this.registrarPasajeroForm.value.nombreUsuario;
      const password = this.registrarPasajeroForm.value.password;


      console.log('Clave Provisoria:', nombreCompleto);
      console.log('Nueva Contraseña:', correoElectronico);
      console.log('Confirmar Nueva Contraseña:', nombreUsuario);
      console.log('Confirmar Nueva Contraseña:', password);


      const alert = await this.alertController.create({
        header: 'Se ha registrado con exito!!!',
        message: 'cuenta para ser pasajero... inicie sesion ',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
}
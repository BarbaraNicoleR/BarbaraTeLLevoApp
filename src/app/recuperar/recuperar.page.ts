import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular'; // Importa el AlertController

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  recuperarForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController // Inyecta el AlertController
  ) {
    this.recuperarForm = this.formBuilder.group({
      user: ['', Validators.required],
    });
  }

  ngOnInit() {}

  async onSubmit() {
    if (this.recuperarForm.valid) {
      // Lógica para manejar el envío del formulario
      console.log('Correo:', this.recuperarForm.value.user);

      // Muestra la alerta
      const alert = await this.alertController.create({
        header: '¡Correo enviado!',
        message: 'favor revisar su correo electronico ahi estar su clave provisoria',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
}
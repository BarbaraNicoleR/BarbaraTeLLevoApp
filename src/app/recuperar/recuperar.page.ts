import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  recuperarForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController
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

      // Muestra la alerta solo al presionar el botón "Enviar"
      const alert = await this.alertController.create({
        header: '¡Correo enviado!',
        message: 'Favor revisar su correo electrónico. Su clave provisoria ha sido enviada.',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
}
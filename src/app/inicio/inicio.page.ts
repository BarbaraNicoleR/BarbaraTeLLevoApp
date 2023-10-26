import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {
  inicioForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private firebaseSvc : FirebaseService,//aqui se inyecta la chafa directo en el constructor
    private utilsSvc : UtilsService //aqui se inyecta el uitoilservice
    ) {

    this.inicioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      
    });
  }



  ngOnInit() {
    // Otro código de inicialización si es necesario
  }

  async onSubmit() {
    if (this.inicioForm.valid) {

      const loading = await this.utilsSvc.loading();
      await loading.present();



      this.firebaseSvc.signIn(this.inicioForm.value as User).then(res => {
        console.log(res);
      }).catch(error => {
        console.log(error);

        this.utilsSvc.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        })



      }).finally(() => {
        loading.dismiss();
      })
      // Aquí puedes agregar la lógica de inicio de sesión
      console.log('Usuario:', this.inicioForm.value.user);
      console.log('Contraseña:', this.inicioForm.value.password);
    }
  }
}
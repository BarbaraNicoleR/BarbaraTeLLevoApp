import { AlertController } from '@ionic/angular';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-registrar-pasajero',
  templateUrl: './registrar-pasajero.page.html',
  styleUrls: ['./registrar-pasajero.page.scss'],
})
export class RegistrarPasajeroPage implements OnInit {

  registrarPasajeroForm: FormGroup; // Cambia el nombre del formulario aquí

  constructor(
    private formBuilder: FormBuilder,
    private firebaseSvc: FirebaseService,//aqui se inyecta la chafa directo en el constructor
    private utilsSvc: UtilsService //aqui se inyecta el uitoilservice
  ) {

    this.registrarPasajeroForm = this.formBuilder.group({
      uid: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required, Validators.minLength(6)]],
      rol: ['conductor', Validators.required], // Agrega el campo 'rol' al formulario
    });
  }



  ngOnInit() {
    // Otro código de inicialización si es necesario
  }

  //esto es para guardar los dattos del usuario pero sin la contraseña por eso se hace el delete 
  async setUserInfo(uid: string) {
    if (this.registrarPasajeroForm.valid) {

      const loading = await this.utilsSvc.loading();
      await loading.present();

      let path = `users/${uid}`;
      //aqui deleteamos la password 
      delete this.registrarPasajeroForm.value.password;

      this.firebaseSvc.setDocument(path, this.registrarPasajeroForm.value).then(async res => {

        this.utilsSvc.saveInLocalStorage('user', this.registrarPasajeroForm.value);
        
        this.utilsSvc.routerLink('/inicio');
        this.registrarPasajeroForm.reset();
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
    }
  }


  async onSubmit() {
    if (this.registrarPasajeroForm.valid) {

      const loading = await this.utilsSvc.loading();
      await loading.present();



      this.firebaseSvc.signUp(this.registrarPasajeroForm.value as User).then(async res => {

        await this.firebaseSvc.updateUser(this.registrarPasajeroForm.value.name);
        
        let uid = res.user.uid;

        this.registrarPasajeroForm.controls['uid'].setValue(uid);
        this.setUserInfo(uid);
        
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
    }
  }



}
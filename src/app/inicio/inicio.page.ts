import { Component, OnInit } from '@angular/core';
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
    private firebaseSvc: FirebaseService,
    private utilsSvc: UtilsService
  ) {
    this.inicioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    // Otro código de inicialización si es necesario
  }

  async getUserInfo(uid: string) {
    try {
      const user = await this.firebaseSvc.getDocument(`users/${uid}`);
      if (user && ('name' in user)) {
        const userData: User = user as User;
        this.utilsSvc.saveInLocalStorage('user', userData);
        this.utilsSvc.routerLink('/perfil-pasajero');
        this.inicioForm.reset();
        this.utilsSvc.presentToast({
          message: `Te damos la bienvenida ${userData.name}`,
          duration: 1500,
          color: 'primary',
          position: 'middle',
          icon: 'person-circle-outline',
        });
      } else {
        throw new Error('Usuario no encontrado');
      }
    } catch (error) {
      console.error('Error en getUserInfo:', error);
      this.utilsSvc.presentToast({
        message: error.message,
        duration: 2500,
        color: 'primary',
        position: 'middle',
        icon: 'alert-circle-outline',
      });
    }
  }

  async onSubmit() {
    if (this.inicioForm.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();

      try {
        const res = await this.firebaseSvc.signIn(this.inicioForm.value as User);
        if (res && res.user && res.user.uid) {
          this.getUserInfo(res.user.uid);
          // Puedes decidir si necesitas o no guardar datos adicionales en el localStorage
          // this.firebaseSvc.saveUserDataInLocalStorage(res.user);
        } else {
          throw new Error('Error al obtener datos del usuario');
        }
      } catch (error) {
        console.error('Error en onSubmit:', error);
        this.utilsSvc.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline',
        });
      } finally {
        loading.dismiss();
      }
    }
  }
}
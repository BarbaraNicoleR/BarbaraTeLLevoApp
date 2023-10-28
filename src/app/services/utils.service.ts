import { Injectable, inject } from '@angular/core';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router
  ) {}


  //===================loading================
  async loading() {
    const loading = await this.loadingCtrl.create({ spinner: 'crescent' });
    await loading.present();
    return loading;
  }

  //===================Toast=================
  async presentToast(opts?: ToastOptions) {

    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }

  //=========== enruta cualquier pagina disponible==========

  routerLink(url: string) {
    return this.router.navigateByUrl(url);
  }


  //=============0guarda elementos en localstorage=============00

  saveInLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  //========obtener elementos del localstorage=====
  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key))

  }

}

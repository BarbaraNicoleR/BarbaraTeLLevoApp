import { Injectable, inject } from '@angular/core';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private loadingCtrl: LoadingController) { }
  toastCtrl = inject(ToastController);

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

}

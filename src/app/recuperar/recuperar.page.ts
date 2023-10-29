import { Component, OnInit ,inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  recuperarForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private firebaseSvc: FirebaseService,//aqui se inyecta la chafa directo en el constructor
    private utilsSvc: UtilsService //aqui se inyecta el uitoilservice
  ) {

    this.recuperarForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      
    });
  }

  ngOnInit() {
    // Otro código de inicialización si es necesario
  }

  async onSubmit() {
    if (this.recuperarForm.valid) {

      const loading = await this.utilsSvc.loading();
      await loading.present();



      this.firebaseSvc.sendRecoveryEmail(this.recuperarForm.value.email).then(res => {


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


      

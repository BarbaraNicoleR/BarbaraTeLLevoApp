import { Component, OnInit, inject} from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { UtilsService } from '../services/utils.service';


@Component({
  selector: 'app-perfil-pasajero',
  templateUrl: './perfil-pasajero.page.html',
  styleUrls: ['./perfil-pasajero.page.scss'],
})
export class PerfilPasajeroPage implements OnInit {

  constructor(
  private firebaseSvc: FirebaseService,
  private utilsSvc: UtilsService) { }

  ngOnInit() {
  }
  //CERRRAR SESION BTN 
  signOut() {
    this.firebaseSvc.signOut();
  }


}







import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-historial-conductor',
  templateUrl: './historial-conductor.page.html',
  styleUrls: ['./historial-conductor.page.scss'],
})
export class HistorialConductorPage implements OnInit {
  viajes: any[]; // Ajusta el tipo según la estructura real de tus datos

  constructor(private firebaseSvc: FirebaseService) {}

  ngOnInit() {
    this.firebaseSvc.getTodosViajes()
      .subscribe(data => {
        this.viajes = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as {} // Utiliza 'as {}' para evitar problemas con el tipado
          };
        });
      });
  }
}
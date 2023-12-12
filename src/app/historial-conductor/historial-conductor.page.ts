import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Viaje,User } from '../models/user.model';

@Component({
  selector: 'app-historial-conductor',
  templateUrl: './historial-conductor.page.html',
  styleUrls: ['./historial-conductor.page.scss'],
})
export class HistorialConductorPage implements OnInit {
  viajes: any[]; // Ajusta el tipo según la estructura real de tus datos

  constructor(private afAuth: AngularFireAuth, private firebaseSvc: FirebaseService) { }

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.firebaseSvc.getTodosViajes().subscribe((data) => {
          const observables = data.map(e => {
            const viaje = {
              id: e.payload.doc.id,
              ...(e.payload.doc.data() as Viaje),
            };

            // Verifica que viaje y viaje.conductor estén definidos
            if (viaje && viaje.conductor) {
              // Devuelve el observable de la llamada a getUsuario
              return this.firebaseSvc.getUsuario(viaje.conductor.uid).pipe(
                catchError(error => {
                  console.error('Error al obtener usuario:', error);
                  // Puedes manejar este caso según tus necesidades
                  return of(null);
                })
              );
            } else {
              // Puedes manejar este caso según tus necesidades
              return of(null);
            }
          });

          forkJoin(observables).subscribe((usuarios) => {
            // Asigna los nombres de usuario a los objetos de viaje
            this.viajes = data.map((e, index) => {
              const viaje = {
                id: e.payload.doc.id,
                ...e.payload.doc.data() as Viaje,
                nombreUsuario: usuarios[index]?.name || 'Usuario Desconocido',
              };
              return viaje;
            });
          
            console.log('Viajes con nombres de usuario:', this.viajes);
          });
        });
      }
    });
  }
}
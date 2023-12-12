import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc, collection, addDoc } from '@angular/fire/firestore';
import { UtilsService } from './utils.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private utilsSvc: UtilsService
  ) { }

  getAuth() {
    return getAuth();
  }

  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName });
  }

  sendRecoveryEmail(email: string) {
    return sendPasswordResetEmail(getAuth(), email);
  }

  signOut() {
    getAuth().signOut().then(() => {
      localStorage.removeItem('user');
      this.utilsSvc.routerLink('/home');
    }).catch(error => {
      console.error('Error en signOut:', error);
    });
  }

  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }

  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }



  // ... otros métodos existentes ...

  async agregarViaje(viajeData: any) {
    try {
      // Obtener el ID del usuario actualmente autenticado
      const uid = getAuth().currentUser?.uid;

      if (!uid) {
        throw new Error('Usuario no autenticado');
      }

      // Crear un nuevo documento en la colección 'viajes' con los datos proporcionados
      const viajeRef = await addDoc(collection(getFirestore(), 'viajes'), {
        uid: uid,
        origen: viajeData.origen,
        destino: viajeData.destino,
        valor: viajeData.valor,
        cantidadAsientos: viajeData.cantidadAsientos,
        fecha: viajeData.fecha,
      });

      console.log('Viaje agregado con ID:', viajeRef.id);
      return viajeRef.id;
    } catch (error) {
      console.error('Error al agregar viaje:', error);
      throw error;
    }
  }
  // ... otros métodos del servicio ...

  getTodosViajes(): Observable<any[]> {
    return this.firestore.collection('viajes').snapshotChanges();
  }

  // Agrega una función para obtener información del usuario
  getUsuario(userId: string): Observable<User> {
    return this.firestore.collection('usuarios').doc<User>(userId).valueChanges();
  }
  
}
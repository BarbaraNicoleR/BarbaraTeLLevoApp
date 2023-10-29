import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile , sendPasswordResetEmail} from 'firebase/auth';
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc , getDoc } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);

  // =============autenticacion =================


  //============acceder====================0
  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //============crear usuario====================0
  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //============actualizar user ====================0
  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName })
  }

  //=============RESTABLECER CONTRAEÑA POR EMAIL ============
  sendRecoveryEmail(email :  string){
    return sendPasswordResetEmail(getAuth(),email);
  }

  //============BASE DE DATOS ========================

  //===SETEAR DOCUMENTO =============
  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }

  //====OBTENER DOCUMENTOS============
  async getDocument(path : string) {
  return (await getDoc(doc(getFirestore(),path))).data();
  }
}
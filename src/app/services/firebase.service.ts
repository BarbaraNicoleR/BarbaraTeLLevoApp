import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword , createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  

  auth = inject(AngularFireAuth);

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
  updateUser(displayName :  string) {
    return updateProfile(getAuth().currentUser, { displayName})
  }

}

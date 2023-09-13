import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  inicioForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder ) {

    this.inicioForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
      
    });
  }

  ngOnInit() {
    // Otro código de inicialización si es necesario
  }

  onSubmit() {
    if (this.inicioForm.valid) {
      // Aquí puedes agregar la lógica de inicio de sesión
      console.log('Usuario:', this.inicioForm.value.user);
      console.log('Contraseña:', this.inicioForm.value.password);
    }
  }
}
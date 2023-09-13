import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  recuperarForm: FormGroup; // Inicializa la propiedad recuperarForm

  constructor(private formBuilder: FormBuilder) {
    // Inicializa la propiedad recuperarForm en el constructor
    this.recuperarForm = this.formBuilder.group({
      user: ['', Validators.required],
    });
  }

  ngOnInit() {
    // No es necesario inicializar nuevamente recuperarForm aquí
  }

  onSubmit() {
    if (this.recuperarForm.valid) {
      // Lógica para manejar el envío del formulario
      console.log('Correo:', this.recuperarForm.value.user);
    }
  }
}
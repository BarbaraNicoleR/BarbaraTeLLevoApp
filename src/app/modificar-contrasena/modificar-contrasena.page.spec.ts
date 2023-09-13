import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarContrasenaPage } from './modificar-contrasena.page';

describe('ModificarContrasenaPage', () => {
  let component: ModificarContrasenaPage;
  let fixture: ComponentFixture<ModificarContrasenaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModificarContrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

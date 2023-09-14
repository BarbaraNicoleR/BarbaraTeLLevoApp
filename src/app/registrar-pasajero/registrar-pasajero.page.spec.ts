import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarPasajeroPage } from './registrar-pasajero.page';

describe('RegistrarPasajeroPage', () => {
  let component: RegistrarPasajeroPage;
  let fixture: ComponentFixture<RegistrarPasajeroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrarPasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BienvenidoPage } from './bienvenido.page';

describe('BienvenidoPage', () => {
  let component: BienvenidoPage;
  let fixture: ComponentFixture<BienvenidoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BienvenidoPage], // Componentes utilizados en el módulo
    });
    fixture = TestBed.createComponent(BienvenidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

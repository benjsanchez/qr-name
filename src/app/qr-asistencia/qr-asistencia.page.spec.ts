import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrAsistenciaPage } from './qr-asistencia.page';

describe('QrAsistenciaPage', () => {
  let component: QrAsistenciaPage;
  let fixture: ComponentFixture<QrAsistenciaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QrAsistenciaPage], // Componentes utilizados en el módulo
    });
    fixture = TestBed.createComponent(QrAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

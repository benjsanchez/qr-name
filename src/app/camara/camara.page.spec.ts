import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamaraPage } from './camara.page';

describe('CamaraPage', () => {
  let component: CamaraPage;
  let fixture: ComponentFixture<CamaraPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamaraPage], // Componentes que se utilizan en el módulo
    })
    .compileComponents(); // Compila los componentes y plantillas
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

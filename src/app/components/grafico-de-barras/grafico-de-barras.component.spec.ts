import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDeBarrasComponent } from './grafico-de-barras.component';

describe('GraficoDeBarrasComponent', () => {
  let component: GraficoDeBarrasComponent;
  let fixture: ComponentFixture<GraficoDeBarrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoDeBarrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoDeBarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

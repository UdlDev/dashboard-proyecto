import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDeLineasComponent } from './grafico-de-lineas.component';

describe('GraficoDeLineasComponent', () => {
  let component: GraficoDeLineasComponent;
  let fixture: ComponentFixture<GraficoDeLineasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoDeLineasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoDeLineasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

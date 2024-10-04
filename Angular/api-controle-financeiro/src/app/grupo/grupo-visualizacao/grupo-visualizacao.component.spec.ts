import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoVisualizacaoComponent } from './grupo-visualizacao.component';

describe('GrupoVisualizacaoComponent', () => {
  let component: GrupoVisualizacaoComponent;
  let fixture: ComponentFixture<GrupoVisualizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrupoVisualizacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrupoVisualizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

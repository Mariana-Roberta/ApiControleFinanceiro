import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoVisualizacaoComponent } from './lancamento-visualizacao.component';

describe('LancamentoVisualizacaoComponent', () => {
  let component: LancamentoVisualizacaoComponent;
  let fixture: ComponentFixture<LancamentoVisualizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LancamentoVisualizacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LancamentoVisualizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

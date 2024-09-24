import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaVisualizacaoComponent } from './pessoa-visualizacao.component';

describe('PessoaVisualizacaoComponent', () => {
  let component: PessoaVisualizacaoComponent;
  let fixture: ComponentFixture<PessoaVisualizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoaVisualizacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PessoaVisualizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

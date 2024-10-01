import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoFormularioComponent } from './lancamento-formulario.component';

describe('LancamentoFormularioComponent', () => {
  let component: LancamentoFormularioComponent;
  let fixture: ComponentFixture<LancamentoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LancamentoFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LancamentoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaFormularioComponent } from './pessoa-formulario.component';

describe('PessoaFormularioComponent', () => {
  let component: PessoaFormularioComponent;
  let fixture: ComponentFixture<PessoaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoaFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PessoaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

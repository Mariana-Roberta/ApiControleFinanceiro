import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioListagemComponent } from './relatorio-listagem.component';

describe('RelatorioListagemComponent', () => {
  let component: RelatorioListagemComponent;
  let fixture: ComponentFixture<RelatorioListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioListagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelatorioListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

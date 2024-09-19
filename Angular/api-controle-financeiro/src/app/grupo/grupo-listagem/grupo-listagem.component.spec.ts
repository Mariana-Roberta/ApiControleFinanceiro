import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoListagemComponent } from './grupo-listagem.component';

describe('GrupoListagemComponent', () => {
  let component: GrupoListagemComponent;
  let fixture: ComponentFixture<GrupoListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrupoListagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

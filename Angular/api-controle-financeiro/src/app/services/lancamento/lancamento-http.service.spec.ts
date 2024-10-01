import { TestBed } from '@angular/core/testing';

import { LancamentoHttpService } from './lancamento-http.service';

describe('LancamentoHttpService', () => {
  let service: LancamentoHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LancamentoHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

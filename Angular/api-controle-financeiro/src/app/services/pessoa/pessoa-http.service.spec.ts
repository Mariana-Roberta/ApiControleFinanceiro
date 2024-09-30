import { TestBed } from '@angular/core/testing';

import { PessoaHttpService } from './pessoa-http.service';

describe('PessoaHttpService', () => {
  let service: PessoaHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoaHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

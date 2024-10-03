import { TestBed } from '@angular/core/testing';

import { RelatorioHttpService } from './relatorio-http.service';

describe('RelatorioHttpService', () => {
  let service: RelatorioHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelatorioHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

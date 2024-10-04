import { TestBed } from '@angular/core/testing';

import { GrupoFormService } from './grupo-form.service';

describe('GrupoFormService', () => {
  let service: GrupoFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

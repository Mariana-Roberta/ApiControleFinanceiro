import { MetaHttpService } from "./meta-http.service";
import { TestBed } from '@angular/core/testing';


describe('MetaHttpService', () => {
  let service: MetaHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
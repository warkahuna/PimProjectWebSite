import { TestBed } from '@angular/core/testing';

import { MejdaService } from './mejda.service';

describe('MejdaService', () => {
  let service: MejdaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MejdaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

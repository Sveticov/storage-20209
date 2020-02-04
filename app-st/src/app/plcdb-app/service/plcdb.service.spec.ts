import { TestBed } from '@angular/core/testing';

import { PlcdbService } from './plcdb.service';

describe('PlcdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlcdbService = TestBed.get(PlcdbService);
    expect(service).toBeTruthy();
  });
});

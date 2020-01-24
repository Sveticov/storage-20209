import { TestBed } from '@angular/core/testing';

import { AppPlcServiceService } from './app-plc-service.service';

describe('AppPlcServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppPlcServiceService = TestBed.get(AppPlcServiceService);
    expect(service).toBeTruthy();
  });
});

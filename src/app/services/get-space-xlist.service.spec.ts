import { TestBed } from '@angular/core/testing';

import { GetSpaceXListService } from './get-space-xlist.service';

describe('GetSpaceXListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSpaceXListService = TestBed.get(GetSpaceXListService);
    expect(service).toBeTruthy();
  });
});

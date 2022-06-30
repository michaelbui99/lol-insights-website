import { TestBed } from '@angular/core/testing';

import { SummonersService } from './summoners.service';

describe('SummonersService', () => {
  let service: SummonersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SummonersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

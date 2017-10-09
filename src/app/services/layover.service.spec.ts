import { TestBed, inject } from '@angular/core/testing';

import { LayoverService } from './layover.service';

describe('LayoverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayoverService]
    });
  });

  it('should be created', inject([LayoverService], (service: LayoverService) => {
    expect(service).toBeTruthy();
  }));
});

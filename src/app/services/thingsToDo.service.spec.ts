import { TestBed, inject } from '@angular/core/testing';

import { ThingsToDoService } from './thingsToDo.service';

describe('ThingsToDoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThingsToDoService]
    });
  });

  it('should be created', inject([ThingsToDoService], (service: ThingsToDoService) => {
    expect(service).toBeTruthy();
  }));
});

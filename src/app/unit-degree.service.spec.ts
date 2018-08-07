import { TestBed, inject } from '@angular/core/testing';

import { UnitDegreeService } from './unit-degree.service';

describe('UnitDegreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnitDegreeService]
    });
  });

  it('should be created', inject([UnitDegreeService], (service: UnitDegreeService) => {
    expect(service).toBeTruthy();
  }));
});

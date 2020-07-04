import { TestBed } from '@angular/core/testing';

import { MatPersianDatepickerService } from './mat-persian-datepicker.service';

describe('MatPersianDatepickerService', () => {
  let service: MatPersianDatepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatPersianDatepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPersianDatepickerComponent } from './mat-persian-datepicker.component';

describe('MatPersianDatepickerComponent', () => {
  let component: MatPersianDatepickerComponent;
  let fixture: ComponentFixture<MatPersianDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatPersianDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatPersianDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

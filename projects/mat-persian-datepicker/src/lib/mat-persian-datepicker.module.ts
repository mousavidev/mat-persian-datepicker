import {NgModule} from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from './mat-persian-date-adapter';
import {MAT_MOMENT_DATE_FORMATS} from './mat-persian-date-formats';

export * from './mat-persian-date-adapter';
export * from './mat-persian-date-formats';

@NgModule({
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    }
  ],
})
export class MomentDateModule {}


@NgModule({
  imports: [MomentDateModule],
  providers: [{provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}],
})
export class MatMomentDateModule {}
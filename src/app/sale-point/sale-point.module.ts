import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalePointRoutingModule } from './sale-point-routing.module';
import { SalePointComponent } from './sale-point.component';


@NgModule({
  declarations: [SalePointComponent],
  imports: [
    CommonModule,
    SalePointRoutingModule
  ]
})
export class SalePointModule { }

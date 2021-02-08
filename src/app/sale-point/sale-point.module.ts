import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalePointRoutingModule } from './sale-point-routing.module';
import { SalePointComponent } from './sale-point.component';
import { ProductTypeSelectionComponent } from './product-type-selection/product-type-selection.component';
import { ProductFiltersComponent } from './product-filters/product-filters.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { RightWidgetSelectorComponent } from './right-widget-selector/right-widget-selector.component';
import { TicketComponent } from './ticket/ticket.component';
import { CouponCodeComponent } from './coupon-code/coupon-code.component';
import { ResumeComponent } from './resume/resume.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SalePointComponent, ProductTypeSelectionComponent, ProductFiltersComponent, ProductGridComponent, RightWidgetSelectorComponent, TicketComponent, CouponCodeComponent, ResumeComponent],
  imports: [
    CommonModule,
    SalePointRoutingModule,
    ReactiveFormsModule
  ]
})
export class SalePointModule { }

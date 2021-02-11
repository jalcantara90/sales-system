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
import { RightWidgetComponent } from './right-widget/right-widget.component';
import { TicketTabComponent } from './ticket-tab/ticket-tab.component';
import { DetailTabComponent } from './detail-tab/detail-tab.component';
import { ProductFilterPipe } from '../shared/product/product-filter.pipe';

@NgModule({
  declarations: [
    SalePointComponent,
    ProductTypeSelectionComponent,
    ProductFiltersComponent,
    ProductGridComponent,
    RightWidgetSelectorComponent,
    TicketComponent,
    CouponCodeComponent,
    ResumeComponent,
    RightWidgetComponent,
    TicketTabComponent,
    DetailTabComponent,
    ProductFilterPipe
  ],
  imports: [
    CommonModule,
    SalePointRoutingModule,
    ReactiveFormsModule
  ]
})
export class SalePointModule { }

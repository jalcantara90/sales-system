import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './invoices.component';
import { OrderResumeComponent } from './order-resume/order-resume.component';
import { OrderListComponent } from './order-list/order-list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BookingFilterPipe } from '../shared/ticket/booking.pipe';

@NgModule({
  declarations: [
    InvoicesComponent,
    OrderResumeComponent,
    OrderListComponent,
    PaginationComponent,
    BookingFilterPipe
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    ReactiveFormsModule
  ]
})
export class InvoicesModule { }

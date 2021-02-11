import { DetailTabComponent } from './detail-tab/detail-tab.component';
import { TicketTabComponent } from './ticket-tab/ticket-tab.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalePointComponent } from './sale-point.component';

const routes: Routes = [
  {
    path: '',
    component: SalePointComponent,
    children: [
      { path: '', redirectTo: 'ticket', pathMatch: 'full' },
      { path: 'ticket', component: TicketTabComponent },
      { path: 'detail', component: DetailTabComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalePointRoutingModule { }

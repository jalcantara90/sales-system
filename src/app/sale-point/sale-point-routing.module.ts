import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalePointComponent } from './sale-point.component';

const routes: Routes = [{ path: '', component: SalePointComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalePointRoutingModule { }

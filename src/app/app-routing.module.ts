import { LayoutComponent } from './core/layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DasboardModule),
        pathMatch: 'full',
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'sale-point',
        loadChildren: () => import('./sale-point/sale-point.module').then((m) => m.SalePointModule),
        data: {
          title: 'Point of sales'
        }
      },
      {
        path: 'invoices',
        loadChildren: () => import('./invoices/invoices.module').then((m) => m.InvoicesModule),
        data: {
          title: 'Invoices'
        }
      },
      { path: '**', redirectTo: 'sale-point/ticket' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

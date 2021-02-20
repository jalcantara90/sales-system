import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DasboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';


@NgModule({
  declarations: [DashboardComponent, LineChartComponent, PieChartComponent, DonutChartComponent],
  imports: [
    CommonModule,
    DasboardRoutingModule
  ]
})
export class DasboardModule { }

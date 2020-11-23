import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DasboardRoutingModule } from './dasboard-routing.module';
import { DasboardComponent } from './dasboard.component';


@NgModule({
  declarations: [DasboardComponent],
  imports: [
    CommonModule,
    DasboardRoutingModule
  ]
})
export class DasboardModule { }

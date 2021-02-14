import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuDirective } from './context-menu.directive';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [ContextMenuDirective],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [ContextMenuDirective]
})
export class ContextMenuModule { }

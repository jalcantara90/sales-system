import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { MainLogoComponent } from './main-logo/main-logo.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [NavbarComponent, LayoutComponent, SideMenuComponent, MobileMenuComponent, MainLogoComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LayoutComponent]
})
export class CoreModule { }

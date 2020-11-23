import { AppNavigation, navigation } from './../navigation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent implements OnInit {

  navigation: AppNavigation[]= navigation;
  constructor() { }

  ngOnInit(): void {
  }

}

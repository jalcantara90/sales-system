import { Component, OnInit } from '@angular/core';
import { navigation, AppNavigation } from '../navigation';
import { trigger, state, style, transition, animate } from '@angular/animations';


type MenuState = 'open' | 'close';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  animations: [
    trigger('openCloseMobileMenu', [
      state('open', style({ height: '2000px' })),
      state('close', style({ height: '50px', })),
      transition('open => close', animate('1s ease-in')),
      transition('close => open', animate('1s ease-in')),
    ])
  ]
})
export class MobileMenuComponent {

  navigation: AppNavigation[]= navigation;
  menuState: MenuState = 'close';

  constructor() { }

  public toogleState(): void {
    this.menuState = this.menuState === 'open' ? 'close' : 'open';
  }
}

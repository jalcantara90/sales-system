import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-right-widget-selector',
  templateUrl: './right-widget-selector.component.html',
  styleUrls: ['./right-widget-selector.component.scss']
})
export class RightWidgetSelectorComponent implements OnInit {
  @Input() tabSelected: string = 'ticket';
  @Output() tabChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public change(tabSelected: string): void {
    if (this.tabSelected === tabSelected) {
      return;
    }

    this.tabSelected = tabSelected;
    this.tabChange.emit(tabSelected);
  }
}

import { FormControl } from '@angular/forms';
import { Component, OnInit, Output } from '@angular/core';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss']
})
export class ProductFiltersComponent implements OnInit {
  select = new FormControl();
  input = new FormControl();

  @Output('selectChange') get selectChange() {
    return this.select.valueChanges;
  }

  @Output('searchChange') get searchChange() {
    return this.input.valueChanges.pipe(
      throttleTime(300)
    );
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../shared/product/product.model';
import { enterDown } from './../../shared/animations/enter-down.animation';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  animations: [enterDown]
})
export class ProductGridComponent implements OnInit {

  @Input() productList: Product[];
  @Output() addItemTicket: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addItem(product: Product): void {
    this.addItemTicket.emit(product);
  }
}

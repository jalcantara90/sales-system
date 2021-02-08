import { Component, OnInit } from '@angular/core';
import { enterRight } from './../../shared/animations/enter-right.animation';
import { Product } from './../../shared/product/product.model';



class ProductSelection {
  products: Product[];
  active: boolean = false;
  constructor(public type: string, qty: number) {
    this.products = createFakeProducts(qty);
  }
}

function createFakeProducts(qty: number): Product[] {
  return new Array(qty).map(() => new Product());
}

@Component({
  selector: 'app-product-type-selection',
  templateUrl: './product-type-selection.component.html',
  styleUrls: ['./product-type-selection.component.scss'],
  animations: [enterRight]
})
export class ProductTypeSelectionComponent implements OnInit {
  productSelection: ProductSelection[] = [
    new ProductSelection('Soup', 4),
    new ProductSelection('Pancake & Toast', 8),
    new ProductSelection('Pasta', 8),
    new ProductSelection('Waffle', 6),
    new ProductSelection('Snacks', 9),
    new ProductSelection('Deserts', 8),
    new ProductSelection('Beverage', 10),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  select(type: string): void {
    this.productSelection = this.productSelection.map(p => {
      p.active = p.type === type;
      return p;
    });
  }

}

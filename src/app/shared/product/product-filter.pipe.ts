import { FoodOrBeverageType, Product } from './product.model';
import { Pipe, PipeTransform } from "@angular/core";
import { ProductFilters } from './product-filter.interface';

@Pipe({ name: 'productFilter'})
export class ProductFilterPipe implements PipeTransform {
  transform(
    products: Product[],
    {filters, order, search }: ProductFilters): Product[] {

    let filteredProducts = this.filterProducts(products, filters, search);

    if (order) {
      filteredProducts = filteredProducts.sort(this.sortProducts(order));
    }

    return filteredProducts;
  }

  filterProducts(products: Product[], filters: FoodOrBeverageType[], search: string) {
    const setFilters = new Set(filters);
    let filteredPRoduct = products;
    if (setFilters.size) {
      filteredPRoduct = filteredPRoduct.filter(p => setFilters.has(p.type));
    }

    if (search) {
      filteredPRoduct = filteredPRoduct.filter(p => p.name.toLocaleLowerCase().includes(search.toLowerCase()));
    }

    return filteredPRoduct;
  }

  sortProducts(order: string) {
    switch(order) {
      case('asc'):
      case('desc'):
        return this.sortByName(order);

      case('priceAsc'):
      case('priceDesc'):
        return this.sortByPrice(order);

      default:
        return this.sortByName('asc');
    }
  }

  sortByName(ascOrDesc: 'asc' | 'desc') {
    return (productA: Product, productB: Product): number => {
      const nameA = productA.name.toLowerCase();
      const nameB = productB.name.toLowerCase();

      if (nameA > nameB) {
        return ascOrDesc === 'asc' ? 1 : -1;
      }

      if (nameA < nameB) {
        return ascOrDesc === 'asc' ? -1 : 1;
      }

      return 0;
    }
  }

  sortByPrice(priceAscOrDesc: 'priceAsc' | 'priceDesc') {
    return (productA: Product, productB: Product): number => {
      return priceAscOrDesc === 'priceAsc' ?
        productA.price - productB.price :
        productB.price - productA.price;
    }
  }
}

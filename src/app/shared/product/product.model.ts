
let productId = 0;

export class Product {
  public id: number = productId++;

  constructor(
    public name = '',
    public type = '',
    public price = 0.0,
    public image = 'assets/images/food-beverage-1.jpg'
  ) {}
}

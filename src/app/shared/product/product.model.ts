export enum FoodOrBeverage {
  SNACK = 'snack',
  RAMEN = 'ramen',
  NOODLES = 'noodles',
  CHICKEN = 'chicken',
  TATAKI = 'tataki',
  SUSHI = 'sushi',
  DESSERT = 'dessert',
  BEVERAGE = 'beverage'
}

export type FoodOrBeverageType = `${FoodOrBeverage}`;

let productId = 0;
export class Product {
  public id: number = productId++;

  constructor(
    public name = '',
    public type: FoodOrBeverageType = FoodOrBeverage.BEVERAGE,
    public price = 0.0,
    public image = 'assets/images/food-beverage-1.jpg'
  ) {}
}

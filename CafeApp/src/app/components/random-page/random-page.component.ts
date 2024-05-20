import { Component } from '@angular/core';
import { Coffee } from '../../models/coffee';

@Component({
  selector: 'app-random-page',
  templateUrl: './random-page.component.html',
  styleUrl: './random-page.component.css'
})
export class RandomPageComponent {

  coffeeList: Coffee[] = []; // Kahve listesi

  constructor() {
    this.coffeeList = [
      new Coffee(1, 'Espresso', 5.99, false),
      new Coffee(2, 'Cappuccino', 4.99, true),
      new Coffee(3, 'Latte', 6.99, false),
      new Coffee(4, 'Americano', 6.99, false),
      new Coffee(5, 'Macchiato', 6.99, false),
      new Coffee(6, 'Mocha', 6.99, false),
      new Coffee(7, 'Turkish Coffee', 6.99, false),
      new Coffee(8, 'Flat White', 6.99, false),
      new Coffee(9, 'Affogato', 6.99, false),
      new Coffee(10, 'Irish Coffee', 6.99, false),
      new Coffee(10, 'Irish Coffee', 6.99, false),
      new Coffee(10, 'Irish Coffee', 6.99, false),
      new Coffee(10, 'Irish Coffee', 6.99, false),
      new Coffee(10, 'Irish Coffee', 6.99, false),
      new Coffee(10, 'Irish Coffee', 6.99, false),
      new Coffee(10, 'Irish Coffee', 6.99, false),
      new Coffee(10, 'Irish Coffee', 6.99, false),
      new Coffee(10, 'Irish Coffee', 6.99, false),
      new Coffee(10, 'Irish Coffee', 6.99, false),
      new Coffee(10, 'Irish Coffee', 6.99, false),
    ];

    this.coffeeList.forEach(coffee => {
      if (coffee.onDiscount) {
        coffee.setDiscount(10);
      }
    });
  }


}

import { Injectable } from '@angular/core';
import { Coffee } from '../models/coffee';
import { Category } from '../models/category';
import { CategoryService } from './category.service';


@Injectable({
    providedIn: 'root'
})

export class CoffeeService {

    private categoryList: Category[] = [];

    private defaultCoffeImg = "assets/images/coffee.jpg";
    private coffeeList: Coffee[] = []

    constructor(private categoryService: CategoryService) {
        this.categoryList = this.categoryService.getCategoryList();

        this.coffeeList = [
            new Coffee(1, this.defaultCoffeImg, this.categoryList[0].id, 'Espresso', 120, true, false),
            new Coffee(2, this.defaultCoffeImg, this.categoryList[0].id, 'Cappuccino', 130, true, true),
            new Coffee(3, this.defaultCoffeImg, this.categoryList[1].id, 'Latte', 140, false, true),
            new Coffee(4, this.defaultCoffeImg, this.categoryList[1].id, 'Americano', 100, true, false),
            new Coffee(5, this.defaultCoffeImg, this.categoryList[1].id, 'Macchiato', 110, false, true),
            new Coffee(6, this.defaultCoffeImg, this.categoryList[2].id, 'Mocha', 100, true, false),
            new Coffee(7, this.defaultCoffeImg, this.categoryList[2].id, 'Turkish Coffee', 90, true, false),
            new Coffee(8, this.defaultCoffeImg, this.categoryList[3].id, 'Flat White', 120, false, false),
            new Coffee(9, this.defaultCoffeImg, this.categoryList[3].id, 'Affogato', 140, true, false),
            new Coffee(10, this.defaultCoffeImg, this.categoryList[4].id, 'Irish Coffee', 150, true, false)
        ];

        console.log()
        this.setDiscount(10);

    }

    setDiscount(percent: number) {
        this.coffeeList.forEach(coffee => {
            if (coffee.onDiscount === true) {
                coffee.newPrice = parseFloat((coffee.price - coffee.price * percent / 100).toFixed(2));
            }
        });
    }

    getCoffeeList(): Coffee[] {
        return this.coffeeList;
    }

    getCoffeeListByCategory(categoryId: number): Coffee[] {
        const coffeeListByCategory: Coffee[] = [];
        this.coffeeList.forEach(coffee => {
            if (coffee.categoryId === categoryId) {
                coffeeListByCategory.push(coffee);
            }
        });
        return coffeeListByCategory;
    }

}

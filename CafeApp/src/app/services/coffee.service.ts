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
        this.initializeData();
    }

    private initializeData() {
        this.initializeCategoryList();
        this.initializeCoffeeList();
        
        this.setDiscount(0, 90, undefined);
        this.setDiscount(1, undefined, 50);
   }

    private initializeCategoryList() {
        this.categoryList = this.categoryService.getCategoryList();
    }

    private initializeCoffeeList() {
        if (this.categoryList.length > 0) {
            this.coffeeList = [
                new Coffee(0, this.defaultCoffeImg, this.categoryList[0].id, 'Espresso', 120, true),
                new Coffee(1, this.defaultCoffeImg, this.categoryList[0].id, 'Cappuccino', 130, true),
                new Coffee(2, this.defaultCoffeImg, this.categoryList[1].id, 'Latte', 140, false),
                new Coffee(3, this.defaultCoffeImg, this.categoryList[1].id, 'Americano', 100, true),
                new Coffee(4, this.defaultCoffeImg, this.categoryList[1].id, 'Macchiato', 110, false),
                new Coffee(5, this.defaultCoffeImg, this.categoryList[2].id, 'Mocha', 100, true),
                new Coffee(6, this.defaultCoffeImg, this.categoryList[2].id, 'Turkish Coffee', 90, true),
                new Coffee(7, this.defaultCoffeImg, this.categoryList[3].id, 'Flat White', 120, false),
                new Coffee(8, this.defaultCoffeImg, this.categoryList[3].id, 'Affogato', 140, true),
                new Coffee(9, this.defaultCoffeImg, this.categoryList[4].id, 'Irish Coffee', 150, true)
            ];
        }
    }

    getCoffeeById(coffeeId: number): Coffee | undefined {
        return this.coffeeList.find(coffee => coffee.id === coffeeId);
    }

    setDiscount(coffeeId: number, newPrice?: number, percent?: number): void {
        const coffee = this.getCoffeeById(coffeeId);
        if (coffee) {
            if (newPrice !== undefined) {
                coffee.newPrice = newPrice;
            } else if (percent !== undefined) {
                coffee.newPrice = parseFloat((coffee.price - coffee.price * percent / 100).toFixed(2));
            }
        }
    }

    getCoffeeList(): Coffee[] {
        return this.coffeeList;
    }

    getCoffeeListByCategory(categoryId: number): Coffee[] {
        return this.coffeeList.filter(coffee => coffee.categoryId === categoryId);
    }

    /*
    getCoffeeListByCategory(categoryId: number): Coffee[] {
        const coffeeListByCategory: Coffee[] = [];
        this.coffeeList.forEach(coffee => {
            if (coffee.categoryId === categoryId) {
                coffeeListByCategory.push(coffee);
            }
        });
        return coffeeListByCategory;
    }

    */

}

import { Injectable } from '@angular/core';
import { Coffee } from '../models/coffee';
import { Category } from '../models/category';


@Injectable({
    providedIn: 'root'
})

export class CategoryService {
    
    private defaultCategoryImg = "assets/images/coffee-bean.jpg";
    private categoryList: Category[] = []

    constructor() {
        this.categoryList = [
            new Category(0, this.defaultCategoryImg, 'Espresso Based'),
            new Category(1, this.defaultCategoryImg, 'Milk Based'),
            new Category(2, this.defaultCategoryImg, 'Hot'),
            new Category(3, this.defaultCategoryImg, 'Cold'),
            new Category(4, this.defaultCategoryImg, 'Another1'),
            new Category(5, this.defaultCategoryImg, 'Another2')
        ];
    }

    getCategoryList(): Category[] {
        return this.categoryList;
    }

    getCategoryNameById(categoryId: number): string | null {
        const category = this.categoryList.find(category => category.id === categoryId);
        return category ? category.name : null;
    }

}

import { Component, OnInit } from '@angular/core';
import { Coffee } from '../../models/coffee';
import { CoffeeService } from '../../services/coffee.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-random-page',
  templateUrl: './random-page.component.html',
  styleUrl: './random-page.component.css'
})
export class RandomPageComponent {

  categoryId: number | null = null;
  categoryName: string | null = null;
  coffeeList: Coffee[] = []; // Kahve listesi
  
  constructor(private coffeeService: CoffeeService, private categoryService: CategoryService, private route: ActivatedRoute) {

    this.route.paramMap.subscribe(params => {

      const categoryIdString = params.get('id');

      if (categoryIdString) {

        this.categoryId = parseInt(categoryIdString, 10);
        this.coffeeList = this.coffeeService.getCoffeeListByCategory(this.categoryId);

        this.categoryName = this.categoryService.getCategoryNameById(this.categoryId);
        
      }

    });

  }


}

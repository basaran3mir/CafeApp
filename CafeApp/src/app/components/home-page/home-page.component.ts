import { Component} from '@angular/core';
import { PopupService } from '../../services/pop-up.service';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})

export class HomePageComponent {

  categoryList: Category[] = [];

  constructor(private popupStateService: PopupService, private categoryService: CategoryService, private router: Router) {
    this.popupStateService.showPopup()
    this.categoryList = this.categoryService.getCategoryList();
  }

  navigateToUrl(categoryId: number): void {
    this.router.navigate(['home/random/category/'+categoryId]);
  }

}

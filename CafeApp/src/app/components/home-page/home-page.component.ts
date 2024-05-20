import { Component, OnInit } from '@angular/core';
import { PopupService } from '../../services/pop-up-state.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})

export class HomePageComponent implements OnInit {

  constructor(private popupStateService: PopupService) { 
  }

  ngOnInit(): void {
    this.popupStateService.showPopup();
  }


}

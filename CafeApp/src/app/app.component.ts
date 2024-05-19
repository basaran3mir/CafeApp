import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from './components/pop-up/pop-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  title="CafeApp"

  constructor(private dialog: MatDialog) {}

  showPopup(): void {
    const dialogRef = this.dialog.open(PopUpComponent, {
      data: {
        title: 'SPECIAL OFFER',
      }
    });
  }

}
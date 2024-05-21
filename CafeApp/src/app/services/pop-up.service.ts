import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../components/pop-up/pop-up.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService 
{
  private hasSeenPopup: boolean = false;

  constructor(private dialog: MatDialog) {

  }

  getHasSeenPopup(): boolean {
    return this.hasSeenPopup;
  }

  setHasSeenPopup(value: boolean): void {
    this.hasSeenPopup = value;
  }

  showPopup(): void {
    if(this.getHasSeenPopup() === false) {

        const dialogRef = this.dialog.open(PopUpComponent, {
            data: {
              title: 'SPECIAL OFFER',
            }
          });

        this.setHasSeenPopup(true);
      }
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RandomPageComponent } from './components/random-page/random-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PopupService } from './services/pop-up.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RandomPageComponent,
    NavBarComponent,
    ImageSliderComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    SlickCarouselModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    PopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

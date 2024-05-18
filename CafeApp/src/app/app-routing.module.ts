import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RandomPageComponent } from './components/random-page/random-page.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomePageComponent
  },
  {
    path: "random",
    component: RandomPageComponent
  },
  {
    path: "popup",
    component: PopUpComponent
  },
  {
    path: '**',
    redirectTo: 'hata',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

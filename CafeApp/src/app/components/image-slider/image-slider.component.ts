import { Component} from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})

export class ImageSliderComponent {

  slides = [
    {img: "assets/images/logo.png"},
    {img: "assets/images/banner.png"}
  ];

  slideConfig = {
    "dots": true,
    "prevArrow": '',
    "nextArrow": '',
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 2500
  };
  

}
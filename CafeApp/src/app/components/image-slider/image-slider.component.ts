import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { arrow } from '@popperjs/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})

export class ImageSliderComponent {

  slides = [
    {img: "assets/images/logo.png"},
    {img: "assets/images/logo.png"},
    {img: "assets/images/logo.png"},
    {img: "assets/images/logo.png"}
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
  
  addSlide() {
    this.slides.push({img: "assets/images/popup.png"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e: any) {
    console.log('slick initialized');
  }
  
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  
  afterChange(e: any) {
    console.log('afterChange');
  }
  
  beforeChange(e: any) {
    console.log('beforeChange');
  }

}
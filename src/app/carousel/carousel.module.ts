import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from '../Carousel/slide/slide.component';
import { CarouselComponent } from '../Carousel/carousel/carousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SlideComponent,
    CarouselComponent
  ],
  exports: [
    SlideComponent,
    CarouselComponent
  ]
})
export class CarouselModule { }

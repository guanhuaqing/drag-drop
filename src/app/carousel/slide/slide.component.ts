import { CarouselComponent } from './../carousel/carousel.component';
import { Component, OnInit, Inject, OnDestroy, HostBinding, Input } from '@angular/core';


@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
})
export class SlideComponent implements OnInit, OnDestroy {
  protected carousel: CarouselComponent;
  protected _active;
  @Input() get active() {
    return this._active;
  }
  set active(value) {
    if (value) {
      this.carousel.clodeOtherSlide();
    }
    this._active = value;
  }
  constructor(@Inject(CarouselComponent) carousel: CarouselComponent) {
    this.carousel = carousel;
   }

  ngOnInit() {
    this.carousel.addSlide(this);
  }
  ngOnDestroy() {
    this.carousel.removeSlide(this);
  }

}

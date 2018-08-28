import { SlideComponent } from './../slide/slide.component';
import { Component, OnInit, Input, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  slides: SlideComponent[] = [];
  currentIndex = 0;
  @Input() noPause;
  @Input() noWrap;
  protected _interval;
  protected timer;
  @Input() get interval() {
    return this._interval;
  }
  set interval(value) {
    this._interval = +value;
      console.log(this.interval);
      this.stop();
      this.startTimer();
  }
  constructor() {
    this.noWrap = true;
    this.interval = 1000; // 默认是一秒钟变化一次，如果设置成0，将不会发生变换
   }

  ngOnInit() {
  }
  @HostListener('mouseover') stop() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  @HostListener('mouseout') start() {
    this.startTimer();
  }
  addSlide(slide: SlideComponent) {
    if (this.slides.length === 0) {
      slide.active = true;
    }
    this.slides.push(slide);
  }
  removeSlide(slide: SlideComponent) {
    const index = this.slides.findIndex(innerSlide => innerSlide === slide);
    this.slides.splice(index, 1);
  }
  nextSlide() {
   this.currentIndex = (this.currentIndex >= this.slides.length - 1) ? (this.noWrap ? 0 : this.slides.length - 1) : ++this.currentIndex;
   this.slides[this.currentIndex].active = true;
  }
  previousSlide() {
   this.currentIndex = (this.currentIndex <= 0) ? (this.noWrap ? this.slides.length - 1 : 0) : --this.currentIndex;
   this.slides[this.currentIndex].active = true;
  }
  selectSlide(index) {
    this.currentIndex = index;
    this.slides[this.currentIndex].active = true;
  }
  clodeOtherSlide() {
    this.slides.forEach((slide: SlideComponent) => {
      slide.active = false;
    });
  }

  startTimer() {
    if (!this.interval) {
      return ;
    }
    console.log(this.interval);
   this.timer =  setInterval(() => {
      this.clodeOtherSlide();
      this.currentIndex = ++this.currentIndex % this.slides.length;
      this.slides[this.currentIndex].active = true;
    }, this.interval);
  }

}

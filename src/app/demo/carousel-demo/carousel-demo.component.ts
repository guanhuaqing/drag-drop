import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-demo',
  templateUrl: './carousel-demo.component.html',
  styleUrls: ['./carousel-demo.component.css']
})
export class CarouselDemoComponent implements OnInit {
  noWrapSlides;
  noPause;
  interval = 1000;
  constructor() { }

  ngOnInit() {
  }

}

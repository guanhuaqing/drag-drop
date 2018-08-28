import { Component, OnInit, Input, AfterViewInit, HostListener, ElementRef, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-tooltip-content',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit, AfterViewInit {
  @Input() config;
  constructor(private el: ElementRef, private render: Renderer2){

  }
  ngOnInit() {

  }
  // position tooltip accord to the config's ref style
  ngAfterViewInit() {
    const pos = this.config.ref.nativeElement.getBoundingClientRect();
   const content = this.el.nativeElement.querySelector('.my-tootip');
   const contentSize = content.getBoundingClientRect();

   switch (this.config.direction) {
    case 'up':
    this.render.setStyle(content, 'left', (pos.left + (pos.width - contentSize.width) / 2) + 'px');
    this.render.setStyle(content, 'top', (pos.top - contentSize.height - 5) + 'px');
    break;
    case 'right':
    console.log(pos.right);
    this.render.setStyle(content, 'left', (pos.right + 20 + 'px'));
    this.render.setStyle(content, 'top', (pos.top + (pos.height - contentSize.height) / 2) + 'px');
    console.log(content.getBoundingClientRect().left);
    break;
    case 'left':
    console.log(pos.left);
    this.render.setStyle(content, 'right', (pos.left + 20) + 'px');
    this.render.setStyle(content, 'top', (pos.top + (pos.height - contentSize.height) / 2) + 'px');
    console.log(content.getBoundingClientRect().right);
    break;
    default:
    this.render.setStyle(content, 'left', (pos.left + (pos.width - contentSize.width) / 2) + 'px');
    this.render.setStyle(content, 'top', (pos.bottom + 8 ) + 'px');
    break;
   }

     // console.log(this.el.nativeElement.querySelector('.my-tootip').getBoundingClientRect());
  }
  @HostListener('window:resize')
  onWindowResize(): void {

  }
}

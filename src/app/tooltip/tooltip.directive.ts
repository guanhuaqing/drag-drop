import { TooltipService } from './tooltip.service';

import { Directive, OnInit, ElementRef, Renderer2, TemplateRef, ViewContainerRef, Input, HostListener, HostBinding, } from '@angular/core';


@Directive({
  selector: '[appTooltip]',
})

export class TooltipDirective implements OnInit {
  tooltipText;
  config;
  private id;
//  @HostBinding('style.position') position: String = 'relative';
  constructor(private el: ElementRef,
               private renderer: Renderer2,
               private tooltipService: TooltipService
  ) {

  }
  @HostListener('mouseenter') onmouseenter() {
    console.log('mouseenter');
   /* this.tooltipText = this.renderer.createElement('div');
    const text = this.renderer.createText(this.config.content);
    this.renderer.addClass(this.tooltipText, 'test');
    this.renderer.appendChild(this.tooltipText, text);
    console.log(this.el.nativeElement);
   this.renderer.appendChild(this.el.nativeElement, this.tooltipText);*/
    this.id = Math.random();
    this.tooltipService.components.push({
      id: this.id,
      ref: this.el,
      title: this.config.content,
      direction: this.config.direction
    });
  }
  @HostListener('mouseleave') onmouseleave() {
    console.log('mouseleave');
    this.destroy();
  // this.renderer.removeChild(this.el.nativeElement, this.tooltipText);
  }
  @Input('appTooltip') set appTooltip(config: any) {
    console.log('配置的内容:' + config);
    this.config = config;
  }
  ngOnInit() {
    this.destroy();
  }
   destroy() {
     const idx = this.tooltipService.components.findIndex(t => t.id === this.id);
     this.tooltipService.components.splice(idx, 1);
  }

}

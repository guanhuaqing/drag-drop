import { Directive, HostListener, ElementRef, OnInit, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'my-dropdown', // exportAs在模板中方便访问指令或者组件的实例
})
export class DropdownDirective implements OnInit {
  dropdownContent: any;
  dropdownToggle: any;
  protected _isDisabled;
  protected _dropup;
  @Input('dropup')
  set dropup(value) {
    console.log(value);
    this._dropup = value;
    // this.dropdownContent.topHeight = '200px';
  }
  get dropup() {
    return this._dropup;
  }
  @Input()
  set isDisabled(value) {
    if (this._isDisabled !== value) {
      this._isDisabled = value;
      if (!value && this.dropdownToggle) {
        this.render.setStyle(this.elementRef.nativeElement, 'opacity', 0.5);
        this.dropdownToggle.clickable = false;
      } else if ( value) {
        this.render.setStyle(this.elementRef.nativeElement, 'opacity', 1);
        this.dropdownToggle.clickable = true;
      }
    }
  }
  get isDisabled() {
    return this._isDisabled;
  }
  constructor(public elementRef: ElementRef, private render: Renderer2) { }

  ngOnInit() {
  }
  subscribeToggle() {
    this.dropdownToggle.toggleEvent.subscribe(flag =>  this.dropdownContent.condition = flag );
  }
  toggle() {
    this.dropdownToggle.toggleEvent.emit(this.dropdownToggle.toggleFlag = !this.dropdownToggle.toggleFlag);
  }
  show() {
    if (!this.dropdownContent.condition) {
      this.dropdownToggle.toggleEvent.emit(true);
    }
  }
  hide() {
    if (this.dropdownContent.condition) {
        this.dropdownToggle.toggleEvent.emit(false);
    }
  }

}

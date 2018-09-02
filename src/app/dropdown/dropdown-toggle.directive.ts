import { DropdownDirective } from './dropdown.directive';
import { Directive, HostListener, Output, EventEmitter, Inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdownToggle]'
})
export class DropdownToggleDirective implements OnInit{
  toggleFlag = false;
  clickable = true;
  protected dropdownDirective;
  @Output() toggleEvent = new EventEmitter();
  @HostListener('click', ['$event']) togglePanel(event) {
    event.stopPropagation();
    event.preventDefault();
    if (!this.clickable) {
      return;
    }
    this.toggleFlag = !this.toggleFlag;
    this.toggleEvent.emit(this.toggleFlag);
  }
  /**
   *
   * @param dropDown
   */
  @HostListener('document:click') docClick() {
   console.log('click the document....');
   if (this.toggleFlag) {
     this.toggleFlag = false;
    this.toggleEvent.emit(this.toggleFlag);
   }
  }
  constructor(@Inject(DropdownDirective) dropDown: DropdownDirective) {
    this.dropdownDirective = dropDown;
   }

   ngOnInit() {
     this.dropdownDirective.dropdownToggle = this;
     this.dropdownDirective.subscribeToggle();
   }
}

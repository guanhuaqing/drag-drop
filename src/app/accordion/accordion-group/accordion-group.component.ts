import { AccordionComponent } from './../accordion/accordion.component';
import { Component, OnInit, Input, Output, EventEmitter, Inject, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-accordion-group',
  templateUrl: './accordion-group.component.html',
  styleUrls: ['./accordion-group.component.css']
})
export class AccordionGroupComponent implements OnInit, OnDestroy {
  @Input() heading;
  @Input() isDisabled;

  @Output()
  isOpenChange: EventEmitter<any> = new EventEmitter();
  protected accordition: AccordionComponent;
  protected _isopen: boolean;
  @Input() get isOpen() {
    return this._isopen;
  }
  @Input()  set isOpen(value) {
    if (value !== this.isOpen) {
      if (value) {
        this.accordition.closeOtherPanles(this);
      }
      this._isopen = value;
      this.isOpenChange.emit(this.isOpen);
    }
  }

  constructor(@Inject(AccordionComponent) accordion: AccordionComponent) {
    this.accordition = accordion;
   }

  ngOnInit() {
    this.accordition.addGroup(this);
  }
  ngOnDestroy() {
    this.accordition.removeGroup(this);
  }
  toggle(event) {
    if (this.isDisabled) {
      return;
    }
    this.isOpen = ! this.isOpen;
  }


}

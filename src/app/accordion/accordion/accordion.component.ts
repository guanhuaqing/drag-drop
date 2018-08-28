import { AccordionGroupComponent } from './../accordion-group/accordion-group.component';
import { Component, OnInit, Input, ElementRef } from '@angular/core';


@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() closeOthers;
  protected groups: AccordionGroupComponent[] = [];
  constructor(private ele: ElementRef) { }

  ngOnInit() {
  }

  closeOtherPanles(openGroup: AccordionGroupComponent){
    if (!this.closeOthers) {
      return;
    }
    this.groups.forEach((group: AccordionGroupComponent) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }

  addGroup(group: AccordionGroupComponent){
    this.groups.push(group);
  }
  removeGroup(group: AccordionGroupComponent){
    const index = this.groups.findIndex((innerGroup: AccordionGroupComponent) => innerGroup === group );
    this.groups.splice(index, 1 );
  }
}

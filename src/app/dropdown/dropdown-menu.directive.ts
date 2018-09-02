import { DropdownDirective } from './dropdown.directive';
import { Directive, TemplateRef, ViewContainerRef, Input, Inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdownMenu]'
})
export class DropdownMenuDirective implements OnInit {
  private dropdownDirective: DropdownDirective;
  protected _condition;
  @Input('appDropdownMenu')
  set condition(newCondition: boolean) {
    if (newCondition) {
      this.viewContaner.createEmbeddedView(this.temRef);
    } else {
      this.viewContaner.clear();
    }
    this._condition = newCondition;
  }
  get condition() {
    return this._condition;
  }

  constructor(
    private temRef: TemplateRef<any>,
    private viewContaner: ViewContainerRef,
    private render: Renderer2,
    @Inject(DropdownDirective) dropdown: DropdownDirective
  ) {
    this.dropdownDirective = dropdown;
   }
  ngOnInit() {
    this.dropdownDirective.dropdownContent = this;
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';
import { DropdownMenuDirective } from './dropdown-menu.directive';
import { DropdownToggleDirective } from './dropdown-toggle.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DropdownDirective,
    DropdownMenuDirective,
    DropdownToggleDirective
  ],
  exports: [
    DropdownDirective,
    DropdownMenuDirective,
    DropdownToggleDirective
  ]
})
export class DropdownModule { }

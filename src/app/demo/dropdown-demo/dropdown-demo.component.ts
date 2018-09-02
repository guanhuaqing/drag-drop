import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-demo',
  templateUrl: './dropdown-demo.component.html',
  styleUrls: ['./dropdown-demo.component.css']
})
export class DropdownDemoComponent implements OnInit {

  disabled: any = false;
  isDropup: any = true;
  constructor() { }

  ngOnInit() {
  }

}

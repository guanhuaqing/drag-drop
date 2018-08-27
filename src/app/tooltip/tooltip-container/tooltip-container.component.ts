import { TooltipService } from './../tooltip.service';
import { Component, OnInit, Input, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-tooltip-container',
  templateUrl: './tooltip-container.component.html',
  styleUrls: ['./tooltip-container.component.css']
})
export class TooltipContainerComponent implements OnInit {
  @Input() config;
  constructor(private tooltipService: TooltipService) {

  }

  ngOnInit() {

  }


}

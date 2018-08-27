import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tooltip-demo',
  templateUrl: './tooltip-demo.component.html',
  styleUrls: ['./tooltip-demo.component.css']
})
export class TooltipDemoComponent implements OnInit {
  // tooltipConfig =  '哈哈，这是提示内容。';
  tooltipConfigUp = {
    content: '哈哈，这是提示内容。',
    direction: 'up'
  };
  tooltipConfigDown = {
    content: '哈哈，这是提示内容。',
    direction: 'down'
  };
  tooltipConfigLeft = {
    content: '哈哈，这是提示内容。',
    direction: 'left'
  };
  tooltipConfigRight = {
    content: '哈哈，这是提示内容。',
    direction: 'right'
  };

  ngOnInit() {

  }
}

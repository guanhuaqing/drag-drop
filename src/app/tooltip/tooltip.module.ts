import { TooltipService } from './tooltip.service';
import { TooltipContainerComponent } from './tooltip-container/tooltip-container.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipRoutingModule } from './tooltip-routing.module';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { TooltipDirective } from './tooltip.directive';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    TooltipDirective,
    TooltipDemoComponent,
    TooltipComponent,
    TooltipContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    TooltipRoutingModule
  ],
  exports: [
    TooltipDirective,
    TooltipComponent,
    TooltipDemoComponent,
    TooltipContainerComponent
  ],
  providers: [
    TooltipService
  ]
})
export class TooltipModule { }

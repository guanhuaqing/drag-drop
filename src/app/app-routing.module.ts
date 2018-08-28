import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { DragDemoComponent } from './draggable/drag-demo/drag-demo.component';
import { AccordionDemoComponent } from './demo/accordion-demo/accordion-demo.component';
import { TooltipDemoComponent } from './tooltip/tooltip-demo/tooltip-demo.component';

const routes: Routes = [

 {
   path: '',
   pathMatch: 'full',
   redirectTo: '/drag'
 }, {
    path: 'drag',
    component: DragDemoComponent,
  }, {
    path: 'tooltip',
    component: TooltipDemoComponent
  }, {
    path: 'accordion',
    component: AccordionDemoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { DragDirective } from './drag.directive';
import { DragDemoComponent } from './drag-demo/drag-demo.component';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    DragDemoComponent,
    DragDirective
  ],
  imports: [
 
  ],
  exports:[
    DragDemoComponent
  ],
  providers: []
})
export class DragModule { }

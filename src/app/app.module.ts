import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {DragModule} from './draggable/drag.module';
import {TooltipModule} from './tooltip/tooltip.module';
import { AccordionDemoComponent } from './demo/accordion-demo/accordion-demo.component';
import {AccordionModule} from './Accordion/Accordion.module';
import { CarouselDemoComponent } from './demo/carousel-demo/carousel-demo.component';
import { CarouselModule } from './carousel/carousel.module';


@NgModule({
  declarations: [
    AppComponent,
    AccordionDemoComponent,
    CarouselDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragModule,
    TooltipModule,
    AccordionModule,
    CarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

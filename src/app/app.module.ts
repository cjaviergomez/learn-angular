import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DisableDirective } from './directives/disable.directive';

import { MatSliderModule } from '@angular/material/slider';
import { SliderValueDirective } from './directives/slider-value.directive';

@NgModule({
  declarations: [AppComponent, DisableDirective, SliderValueDirective],
  imports: [BrowserModule, BrowserAnimationsModule, MatSliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

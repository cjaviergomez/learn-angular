import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DisableDirective } from './directives/disable.directive';

import { SliderValueDirective } from './directives/slider-value.directive';
import { MaterialModule } from './utils/material/material.module';

@NgModule({
	declarations: [AppComponent, DisableDirective, SliderValueDirective],
	imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}

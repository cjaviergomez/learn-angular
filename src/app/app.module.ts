import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { MaterialModule } from './utils/material/material.module';
import { HomeComponent } from './components/home/home.component';
@NgModule({
	declarations: [AppComponent, HomeComponent],
	imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}

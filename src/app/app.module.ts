import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { TokenInterceptor } from './modules/testing/interceptors/token.interceptor';
import { MaterialModule } from './utils/material/material.module';
@NgModule({
	declarations: [AppComponent, HomeComponent],
	imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, MaterialModule, AppRoutingModule],
	providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
	bootstrap: [AppComponent]
})
export class AppModule {}

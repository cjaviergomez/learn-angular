import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../utils/material/material.module';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { StylePreviewComponent } from './components/style-preview/style-preview.component';
import { TestingRoutingModule } from './testing.routing';

@NgModule({
	declarations: [HomeComponent, ProductsComponent, StylePreviewComponent, ProductComponent],
	imports: [CommonModule, TestingRoutingModule, ReactiveFormsModule, MaterialModule]
})
export class TestingModule {}

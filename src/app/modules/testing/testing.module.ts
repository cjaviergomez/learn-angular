import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../utils/material/material.module';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { StylePreviewComponent } from './components/style-preview/style-preview.component';
import { TestingRoutingModule } from './testing.routing';
import { PersonComponent } from './components/person/person.component';
import { PeopleComponent } from './components/people/people.component';

@NgModule({
	declarations: [HomeComponent, ProductsComponent, StylePreviewComponent, ProductComponent, PersonComponent, PeopleComponent],
	imports: [CommonModule, TestingRoutingModule, ReactiveFormsModule, MaterialModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestingModule {}

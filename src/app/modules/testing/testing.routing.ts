import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersonComponent } from './components/person/person.component';
import { ProductsComponent } from './components/products/products.component';
import { StylePreviewComponent } from './components/style-preview/style-preview.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'home',
		component: HomeComponent,
		children: [
			{ path: 'products', component: ProductsComponent },
			{ path: 'style-preview', component: StylePreviewComponent },
			{ path: 'person', component: PersonComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TestingRoutingModule {}

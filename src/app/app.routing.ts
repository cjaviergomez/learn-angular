import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'testing', loadChildren: () => import('./modules/testing/testing.module').then(m => m.TestingModule) },
	{
		path: 'directives',
		loadChildren: () => import('./modules/directives/directives.module').then(m => m.DirectivesModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}

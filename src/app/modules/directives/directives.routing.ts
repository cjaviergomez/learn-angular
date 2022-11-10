import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from './components/apply/apply.component';

const routes: Routes = [
	{ path: '', redirectTo: 'apply', pathMatch: 'full' },
	{ path: 'apply', component: ApplyComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DirectivesRoutingModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../utils/material/material.module';
import { ApplyComponent } from './components/apply/apply.component';
import { DirectivesRoutingModule } from './directives.routing';
import { DisableDirective } from './directives/disable.directive';
import { SliderValueDirective } from './directives/slider-value.directive';

@NgModule({
	declarations: [ApplyComponent, DisableDirective, SliderValueDirective],
	imports: [CommonModule, MaterialModule, DirectivesRoutingModule]
})
export class DirectivesModule {}

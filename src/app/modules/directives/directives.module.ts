import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MaterialModule } from '../../utils/material/material.module';
import { ApplyComponent } from './components/apply/apply.component';
import { DirectivesRoutingModule } from './directives.routing';
import { DisableDirective } from './directives/disable.directive';
import { SliderValueDirective } from './directives/slider-value.directive';

@NgModule({
	declarations: [ApplyComponent, DisableDirective, SliderValueDirective],
	imports: [CommonModule, MaterialModule, DirectivesRoutingModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DirectivesModule {}

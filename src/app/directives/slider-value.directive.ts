import { Directive } from '@angular/core';
import { MatSlider } from '@angular/material/slider';

@Directive({
  selector: '[appSliderValue]',
})
export class SliderValueDirective {
  title: string = 'Learn';
  constructor(private slider: MatSlider) {
    this.slider.value = 50;
    this.slider.color = 'primary';
  }
}

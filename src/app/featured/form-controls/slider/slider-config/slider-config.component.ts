import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-config',
  templateUrl: './slider-config.component.html',
  styleUrls: ['./slider-config.component.scss']
})
export class SliderConfigComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  tickInterval = 1;

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }
}

import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-bar-config',
  templateUrl: './progress-bar-config.component.html',
  styleUrls: ['./progress-bar-config.component.scss']
})
export class ProgressBarConfigComponent {
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'indeterminate';
  value = 50;
  bufferValue = 75;
}

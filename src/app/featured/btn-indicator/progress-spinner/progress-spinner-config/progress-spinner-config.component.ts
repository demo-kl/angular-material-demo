import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-progress-spinner-config',
  templateUrl: './progress-spinner-config.component.html',
  styleUrls: ['./progress-spinner-config.component.scss']
})
export class ProgressSpinnerConfigComponent {

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
}

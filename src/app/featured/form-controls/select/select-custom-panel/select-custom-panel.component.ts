import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-select-custom-panel',
  templateUrl: './select-custom-panel.component.html',
  styleUrls: ['./select-custom-panel.component.scss'],
  // Encapsulation has to be disabled in order for the
  // component style to apply to the select panel.
  encapsulation: ViewEncapsulation.None,
})
export class SelectCustomPanelComponent implements OnInit {
  panelColor = new FormControl('red');

  constructor() { }

  ngOnInit(): void {
  }

}

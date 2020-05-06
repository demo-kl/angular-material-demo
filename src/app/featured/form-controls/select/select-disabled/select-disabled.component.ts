import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-select-disabled',
  templateUrl: './select-disabled.component.html',
  styleUrls: ['./select-disabled.component.scss']
})
export class SelectDisabledComponent implements OnInit {
  disableSelect = new FormControl(false);

  constructor() { }

  ngOnInit(): void {
  }

}

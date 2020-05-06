import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp-panel-basic',
  templateUrl: './exp-panel-basic.component.html',
  styleUrls: ['./exp-panel-basic.component.scss']
})
export class ExpPanelBasicComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}

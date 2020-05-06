import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp-panel-accord',
  templateUrl: './exp-panel-accord.component.html',
  styleUrls: ['./exp-panel-accord.component.scss']
})
export class ExpPanelAccordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}

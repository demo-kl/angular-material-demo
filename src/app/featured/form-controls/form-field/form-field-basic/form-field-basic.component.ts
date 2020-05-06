import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-field-basic',
  templateUrl: './form-field-basic.component.html',
  styleUrls: ['./form-field-basic.component.scss']
})
export class FormFieldBasicComponent implements OnInit {
  hide = true;
  constructor() { }

  ngOnInit(): void {
  }

}

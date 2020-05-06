import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sidenav-fixed',
  templateUrl: './sidenav-fixed.component.html',
  styleUrls: ['./sidenav-fixed.component.scss']
})
export class SidenavFixedComponent implements OnInit {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      bottom: 280,
      fixed: false,
      top: 300
    });
  }

  ngOnInit(): void {
  }
}

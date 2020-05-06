import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-sidenav-mode',
  templateUrl: './sidenav-mode.component.html',
  styleUrls: ['./sidenav-mode.component.scss']
})
export class SidenavModeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mode = new FormControl('over');
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}

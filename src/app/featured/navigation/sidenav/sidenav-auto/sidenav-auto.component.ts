import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-auto',
  templateUrl: './sidenav-auto.component.html',
  styleUrls: ['./sidenav-auto.component.scss']
})
export class SidenavAutoComponent implements OnInit {
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }

}

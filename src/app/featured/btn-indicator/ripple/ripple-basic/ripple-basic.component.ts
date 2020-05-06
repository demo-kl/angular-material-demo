import { Component } from '@angular/core';

@Component({
  selector: 'app-ripple-basic',
  templateUrl: './ripple-basic.component.html',
  styleUrls: ['./ripple-basic.component.scss']
})
export class RippleBasicComponent {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
}

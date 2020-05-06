import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar-overview-example',
  templateUrl: './snack-bar-overview-example.component.html',
  styleUrls: ['./snack-bar-overview-example.component.scss']
})
export class SnackBarOverviewExampleComponent {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}

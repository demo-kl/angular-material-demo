import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarOverviewExampleComponent } from './snack-bar-overview-example.component';

describe('SnackBarOverviewExampleComponent', () => {
  let component: SnackBarOverviewExampleComponent;
  let fixture: ComponentFixture<SnackBarOverviewExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarOverviewExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

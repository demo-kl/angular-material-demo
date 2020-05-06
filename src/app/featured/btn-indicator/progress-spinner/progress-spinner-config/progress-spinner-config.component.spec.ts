import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinnerConfigComponent } from './progress-spinner-config.component';

describe('ProgressSpinnerConfigComponent', () => {
  let component: ProgressSpinnerConfigComponent;
  let fixture: ComponentFixture<ProgressSpinnerConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressSpinnerConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSpinnerConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

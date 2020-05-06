import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnIndicatorComponent } from './btn-indicator.component';

describe('BtnIndicatorComponent', () => {
  let component: BtnIndicatorComponent;
  let fixture: ComponentFixture<BtnIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

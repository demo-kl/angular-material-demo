import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipPositionComponent } from './tooltip-position.component';

describe('TooltipPositionComponent', () => {
  let component: TooltipPositionComponent;
  let fixture: ComponentFixture<TooltipPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

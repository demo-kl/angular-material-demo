import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipOverviewComponent } from './tooltip-overview.component';

describe('TooltipOverviewComponent', () => {
  let component: TooltipOverviewComponent;
  let fixture: ComponentFixture<TooltipOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

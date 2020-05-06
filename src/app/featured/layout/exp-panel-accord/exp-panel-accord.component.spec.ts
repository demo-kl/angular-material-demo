import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpPanelAccordComponent } from './exp-panel-accord.component';

describe('ExpPanelAccordComponent', () => {
  let component: ExpPanelAccordComponent;
  let fixture: ComponentFixture<ExpPanelAccordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpPanelAccordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpPanelAccordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeOverviewComponent } from './badge-overview.component';

describe('BadgeOverviewComponent', () => {
  let component: BadgeOverviewComponent;
  let fixture: ComponentFixture<BadgeOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

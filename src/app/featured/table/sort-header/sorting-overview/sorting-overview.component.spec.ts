import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingOverviewComponent } from './sorting-overview.component';

describe('SortingOverviewComponent', () => {
  let component: SortingOverviewComponent;
  let fixture: ComponentFixture<SortingOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

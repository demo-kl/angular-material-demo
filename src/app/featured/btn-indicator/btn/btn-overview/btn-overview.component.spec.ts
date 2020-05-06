import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOverviewComponent } from './btn-overview.component';

describe('BtnOverviewComponent', () => {
  let component: BtnOverviewComponent;
  let fixture: ComponentFixture<BtnOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

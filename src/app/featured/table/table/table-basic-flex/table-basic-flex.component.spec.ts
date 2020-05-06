import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBasicFlexComponent } from './table-basic-flex.component';

describe('TableBasicFlexComponent', () => {
  let component: TableBasicFlexComponent;
  let fixture: ComponentFixture<TableBasicFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBasicFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBasicFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

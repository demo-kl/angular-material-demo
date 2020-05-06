import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMultipleHeaderComponent } from './table-multiple-header.component';

describe('TableMultipleHeaderComponent', () => {
  let component: TableMultipleHeaderComponent;
  let fixture: ComponentFixture<TableMultipleHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableMultipleHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMultipleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

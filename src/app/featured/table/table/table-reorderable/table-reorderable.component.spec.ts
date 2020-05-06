import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReorderableComponent } from './table-reorderable.component';

describe('TableReorderableComponent', () => {
  let component: TableReorderableComponent;
  let fixture: ComponentFixture<TableReorderableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableReorderableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableReorderableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

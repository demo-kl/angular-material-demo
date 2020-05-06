import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDisabledComponent } from './select-disabled.component';

describe('SelectDisabledComponent', () => {
  let component: SelectDisabledComponent;
  let fixture: ComponentFixture<SelectDisabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDisabledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

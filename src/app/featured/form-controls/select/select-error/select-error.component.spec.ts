import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectErrorComponent } from './select-error.component';

describe('SelectErrorComponent', () => {
  let component: SelectErrorComponent;
  let fixture: ComponentFixture<SelectErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

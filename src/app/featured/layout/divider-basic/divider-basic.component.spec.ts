import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerBasicComponent } from './divider-basic.component';

describe('DividerBasicComponent', () => {
  let component: DividerBasicComponent;
  let fixture: ComponentFixture<DividerBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividerBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RippleBasicComponent } from './ripple-basic.component';

describe('RippleBasicComponent', () => {
  let component: RippleBasicComponent;
  let fixture: ComponentFixture<RippleBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RippleBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RippleBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

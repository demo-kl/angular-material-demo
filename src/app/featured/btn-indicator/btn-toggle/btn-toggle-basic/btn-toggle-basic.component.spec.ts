import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnToggleBasicComponent } from './btn-toggle-basic.component';

describe('BtnToggleBasicComponent', () => {
  let component: BtnToggleBasicComponent;
  let fixture: ComponentFixture<BtnToggleBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnToggleBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnToggleBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

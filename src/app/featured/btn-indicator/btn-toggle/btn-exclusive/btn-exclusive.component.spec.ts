import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnExclusiveComponent } from './btn-exclusive.component';

describe('BtnExclusiveComponent', () => {
  let component: BtnExclusiveComponent;
  let fixture: ComponentFixture<BtnExclusiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnExclusiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnExclusiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

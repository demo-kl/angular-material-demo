import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpPanelBasicComponent } from './exp-panel-basic.component';

describe('ExpPanelBasicComponent', () => {
  let component: ExpPanelBasicComponent;
  let fixture: ComponentFixture<ExpPanelBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpPanelBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpPanelBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

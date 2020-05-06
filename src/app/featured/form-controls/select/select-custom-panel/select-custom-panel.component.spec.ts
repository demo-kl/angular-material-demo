import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCustomPanelComponent } from './select-custom-panel.component';

describe('SelectCustomPanelComponent', () => {
  let component: SelectCustomPanelComponent;
  let fixture: ComponentFixture<SelectCustomPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCustomPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCustomPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

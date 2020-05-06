import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsOptionComponent } from './tabs-option.component';

describe('TabsOptionComponent', () => {
  let component: TabsOptionComponent;
  let fixture: ComponentFixture<TabsOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

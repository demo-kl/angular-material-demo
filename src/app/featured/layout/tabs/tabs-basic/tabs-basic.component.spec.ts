import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsBasicComponent } from './tabs-basic.component';

describe('TabsBasicComponent', () => {
  let component: TabsBasicComponent;
  let fixture: ComponentFixture<TabsBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

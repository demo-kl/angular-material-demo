import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavAutoComponent } from './sidenav-auto.component';

describe('SidenavAutoComponent', () => {
  let component: SidenavAutoComponent;
  let fixture: ComponentFixture<SidenavAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

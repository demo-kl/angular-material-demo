import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorConfigComponent } from './paginator-config.component';

describe('PaginatorConfigComponent', () => {
  let component: PaginatorConfigComponent;
  let fixture: ComponentFixture<PaginatorConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatorConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

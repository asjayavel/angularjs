import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderpageComponent } from './calenderpage.component';

describe('CalenderpageComponent', () => {
  let component: CalenderpageComponent;
  let fixture: ComponentFixture<CalenderpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownpageComponent } from './dropdownpage.component';

describe('DropdownpageComponent', () => {
  let component: DropdownpageComponent;
  let fixture: ComponentFixture<DropdownpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

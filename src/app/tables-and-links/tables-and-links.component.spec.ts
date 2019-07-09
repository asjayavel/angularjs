import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesAndLinksComponent } from './tables-and-links.component';

describe('TablesAndLinksComponent', () => {
  let component: TablesAndLinksComponent;
  let fixture: ComponentFixture<TablesAndLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesAndLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesAndLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

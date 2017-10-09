import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityThingsToDoFilterComponent } from './city-things-to-do-filter.component';

describe('CityThingsToDoFilterComponent', () => {
  let component: CityThingsToDoFilterComponent;
  let fixture: ComponentFixture<CityThingsToDoFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityThingsToDoFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityThingsToDoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityThingsToDoListComponent } from './city-things-to-do-list.component';

describe('CityThingsToDoListComponent', () => {
  let component: CityThingsToDoListComponent;
  let fixture: ComponentFixture<CityThingsToDoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityThingsToDoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityThingsToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

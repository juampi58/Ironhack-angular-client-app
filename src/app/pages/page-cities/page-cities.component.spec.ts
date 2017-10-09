import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCitiesComponent } from './page-cities.component';

describe('PageCitiesComponent', () => {
  let component: PageCitiesComponent;
  let fixture: ComponentFixture<PageCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

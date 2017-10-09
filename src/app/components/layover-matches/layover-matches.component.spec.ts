import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoverMatchesComponent } from './layover-matches.component';

describe('LayoverMatchesComponent', () => {
  let component: LayoverMatchesComponent;
  let fixture: ComponentFixture<LayoverMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoverMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoverMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoverRosterComponent } from './layover-roster.component';

describe('LayoverRosterComponent', () => {
  let component: LayoverRosterComponent;
  let fixture: ComponentFixture<LayoverRosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoverRosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoverRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

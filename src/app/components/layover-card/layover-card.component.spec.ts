import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoverCardComponent } from './layover-card.component';

describe('LayoverCardComponent', () => {
  let component: LayoverCardComponent;
  let fixture: ComponentFixture<LayoverCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoverCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoverCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

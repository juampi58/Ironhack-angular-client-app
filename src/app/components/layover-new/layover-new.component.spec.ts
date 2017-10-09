import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoverNewComponent } from './layover-new.component';

describe('LayoverNewComponent', () => {
  let component: LayoverNewComponent;
  let fixture: ComponentFixture<LayoverNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoverNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoverNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

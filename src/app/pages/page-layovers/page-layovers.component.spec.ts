import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoversComponent } from './page-layovers.component';

describe('PageLayoversComponent', () => {
  let component: PageLayoversComponent;
  let fixture: ComponentFixture<PageLayoversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLayoversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

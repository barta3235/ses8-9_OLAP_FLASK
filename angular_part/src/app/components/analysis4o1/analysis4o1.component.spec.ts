import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysis4o1Component } from './analysis4o1.component';

describe('Analysis4o1Component', () => {
  let component: Analysis4o1Component;
  let fixture: ComponentFixture<Analysis4o1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Analysis4o1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analysis4o1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

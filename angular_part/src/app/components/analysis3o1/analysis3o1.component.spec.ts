import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysis3o1Component } from './analysis3o1.component';

describe('Analysis3o1Component', () => {
  let component: Analysis3o1Component;
  let fixture: ComponentFixture<Analysis3o1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Analysis3o1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analysis3o1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

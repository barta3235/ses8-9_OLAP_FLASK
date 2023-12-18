import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysis3o2Component } from './analysis3o2.component';

describe('Analysis3o2Component', () => {
  let component: Analysis3o2Component;
  let fixture: ComponentFixture<Analysis3o2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Analysis3o2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analysis3o2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

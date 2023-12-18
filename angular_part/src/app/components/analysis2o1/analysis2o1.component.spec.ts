import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysis2o1Component } from './analysis2o1.component';

describe('Analysis2o1Component', () => {
  let component: Analysis2o1Component;
  let fixture: ComponentFixture<Analysis2o1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Analysis2o1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analysis2o1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysis2o2Component } from './analysis2o2.component';

describe('Analysis2o2Component', () => {
  let component: Analysis2o2Component;
  let fixture: ComponentFixture<Analysis2o2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Analysis2o2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analysis2o2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

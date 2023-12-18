import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysis4o2Component } from './analysis4o2.component';

describe('Analysis4o2Component', () => {
  let component: Analysis4o2Component;
  let fixture: ComponentFixture<Analysis4o2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Analysis4o2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analysis4o2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

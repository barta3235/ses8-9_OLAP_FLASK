import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysis1o1Component } from './analysis1o1.component';

describe('Analysis1o1Component', () => {
  let component: Analysis1o1Component;
  let fixture: ComponentFixture<Analysis1o1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Analysis1o1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analysis1o1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

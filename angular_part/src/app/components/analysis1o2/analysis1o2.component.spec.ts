import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysis1o2Component } from './analysis1o2.component';

describe('Analysis1o2Component', () => {
  let component: Analysis1o2Component;
  let fixture: ComponentFixture<Analysis1o2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Analysis1o2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analysis1o2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

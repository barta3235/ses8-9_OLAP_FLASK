import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysis5o1Component } from './analysis5o1.component';

describe('Analysis5o1Component', () => {
  let component: Analysis5o1Component;
  let fixture: ComponentFixture<Analysis5o1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Analysis5o1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analysis5o1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

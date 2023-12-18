import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysis5o2Component } from './analysis5o2.component';

describe('Analysis5o2Component', () => {
  let component: Analysis5o2Component;
  let fixture: ComponentFixture<Analysis5o2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Analysis5o2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analysis5o2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

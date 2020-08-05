import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorAnalysisComponent } from './investor-analysis.component';

describe('InvestorAnalysisComponent', () => {
  let component: InvestorAnalysisComponent;
  let fixture: ComponentFixture<InvestorAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

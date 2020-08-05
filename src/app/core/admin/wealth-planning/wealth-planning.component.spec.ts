import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WealthPlanningComponent } from './wealth-planning.component';

describe('WealthPlanningComponent', () => {
  let component: WealthPlanningComponent;
  let fixture: ComponentFixture<WealthPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WealthPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WealthPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

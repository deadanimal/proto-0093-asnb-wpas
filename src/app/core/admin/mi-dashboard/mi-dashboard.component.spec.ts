import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiDashboardComponent } from './mi-dashboard.component';

describe('MiDashboardComponent', () => {
  let component: MiDashboardComponent;
  let fixture: ComponentFixture<MiDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

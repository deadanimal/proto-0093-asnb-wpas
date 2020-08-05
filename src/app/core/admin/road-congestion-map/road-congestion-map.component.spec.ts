import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadCongestionMapComponent } from './road-congestion-map.component';

describe('RoadCongestionMapComponent', () => {
  let component: RoadCongestionMapComponent;
  let fixture: ComponentFixture<RoadCongestionMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadCongestionMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadCongestionMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

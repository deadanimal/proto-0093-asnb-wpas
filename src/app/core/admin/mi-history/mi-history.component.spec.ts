import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiHistoryComponent } from './mi-history.component';

describe('MiHistoryComponent', () => {
  let component: MiHistoryComponent;
  let fixture: ComponentFixture<MiHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

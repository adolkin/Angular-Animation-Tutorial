import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterLeaveStatesComponent } from './enter-leave-states.component';

describe('EnterLeaveStatesComponent', () => {
  let component: EnterLeaveStatesComponent;
  let fixture: ComponentFixture<EnterLeaveStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterLeaveStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterLeaveStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

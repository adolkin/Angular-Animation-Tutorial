import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyChildComponent } from './zippy-child.component';

describe('ZippyChildComponent', () => {
  let component: ZippyChildComponent;
  let fixture: ComponentFixture<ZippyChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZippyChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZippyChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

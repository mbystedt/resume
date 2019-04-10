import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopWrapperComponent } from './desktop-wrapper.component';

describe('DesktopWrapperComponent', () => {
  let component: DesktopWrapperComponent;
  let fixture: ComponentFixture<DesktopWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordAppComponent } from './forget-password-app.component';

describe('ForgetPasswordAppComponent', () => {
  let component: ForgetPasswordAppComponent;
  let fixture: ComponentFixture<ForgetPasswordAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPasswordAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPasswordAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

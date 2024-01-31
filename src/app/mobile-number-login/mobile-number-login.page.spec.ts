import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileNumberLoginPage } from './mobile-number-login.page';

describe('MobileNumberLoginPage', () => {
  let component: MobileNumberLoginPage;
  let fixture: ComponentFixture<MobileNumberLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MobileNumberLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

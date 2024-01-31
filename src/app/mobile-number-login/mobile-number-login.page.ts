import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OtpService } from '../core/service/otp.service'; 

@Component({
  selector: 'app-mobile-login',
  templateUrl: 'mobile-number-login.page.html',
  styleUrls: ['mobile-number-login.page.scss'],
})
export class MobileNumberLoginPage {
  mobileNumber: string = '';

  constructor(private otpService: OtpService, private router: Router) {} 

  async login() {
    try {
      // Calling OTP service to verify OTP
      const response = await this.otpService.verifyOtp(this.mobileNumber, '1234');
      console.log(response); // Handling response accordingly

      // Navigating to OTP page upon successful verification
      this.router.navigate(['/otp']);
    } catch (error) {
      console.error(error);
    }
  }
}

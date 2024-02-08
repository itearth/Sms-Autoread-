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

  // Function to generate random 4-digit OTP
  generateRandomOtp() {
    return Math.floor(1000 + Math.random() * 9000);
  }

  async login() {
    try {
      console.log('MDP');
      // Generate a random 4-digit OTP using the locally defined function
      const otp = this.generateRandomOtp();

      // Store the OTP in local storage
      localStorage.setItem('otp', otp.toString());

      // Calling OTP service to send OTP
      const response = await this.otpService.sendOtp(this.mobileNumber, otp.toString()).toPromise();
      console.log(response); // Handling response accordingly

      // Navigating to OTP page upon successful verification
      this.router.navigate(['/otp']);
    } catch (error) {
      console.error(error);
    }
  }
}









import { Component } from '@angular/core';
import { OtpService } from '../core/service/otp.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage {
  mobileNumber: string = ''; // Variable to store the entered mobile number
  enteredOtp: string = '';

  constructor(private otpService: OtpService) {}

  async verifyOtp() {
    try {
      // Assuming you have a method to retrieve the stored OTP from local storage
      const storedOtp = localStorage.getItem('otp');

      console.log('Verifying OTP for mobile number:', this.mobileNumber);
      // Verifying the entered OTP with the stored OTP
      if (this.enteredOtp === storedOtp) {
        console.log('OTP verified successfully');
        // Proceeding with whatever action you need to take upon successful OTP verification
      } else {
        console.log('Incorrect OTP');
        // Handling incorrect OTP scenario, maybe show an error message to the user
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
}






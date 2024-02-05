import { Component } from '@angular/core';
import { OtpService } from '../core/service/otp.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage {
  enteredOtp: string = '';

  constructor(private otpService: OtpService) {}

  async verifyOtp() {
    try {
      // Retrieve the stored OTP from local storage
      const storedOtp = localStorage.getItem('otp');

      // Assuming we have a method to retrieve the mobile number from storage or input
      const mobileNumber = '9407481880';

      console.log('Verifying OTP...');
      // Verify the entered OTP with the stored OTP
      if (this.enteredOtp === storedOtp) {
        console.log('OTP verified successfully');
        // Proceed with whatever action you need to take upon successful OTP verification
      } else {
        console.log('Incorrect OTP');
        // Handle incorrect OTP scenario, maybe show an error message to the user
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
}








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
      // Assuming you have a method to retrieve the mobile number from storage or input
      const mobileNumber = '9407481880'; 

      const response = await this.otpService.verifyOtp(mobileNumber, this.enteredOtp).toPromise();
      console.log(response); 
    } catch (error) {
      console.error(error);
    }
  }
}

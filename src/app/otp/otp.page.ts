import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { SmsCodeReader } = Plugins;

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage {
  mobileNumber: string = ''; // Variable to store the entered mobile number
  enteredOtp: string = '';

  constructor() {}

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

  async openSmsCode() {
    try {
      // Request permission to read SMS
      await SmsCodeReader['requestPermission']();
      console.log('Permission granted to read SMS');
  
      // Subscribe to SMS code events
      SmsCodeReader['addListener']('onSmsReceived', (data: any) => {
        const codeReceived = data.code;
        console.log('SMS received. Code:', codeReceived);
      
        // Assuming the received code is stored in a variable named `codeReceived`
        this.enteredOtp = codeReceived;
      
        // After receiving the OTP, we can automatically verify it 
        this.verifyOtp();
      });
  
      // Open SMS code reader
      await SmsCodeReader['present']({ numberOfCharacters: 4 });
      console.log('SMS code reader opened');
    } catch (error: any) { // Define the type of error as 'any'
      console.error('Error:', error);
      // Handle errors
      alert('Error reading SMS code: ' + error.message);
    }
  }
}







// import { Component } from '@angular/core';
// import { Plugins } from '@capacitor/core';

// const { SmsCodeReader } = Plugins;

// @Component({
//   selector: 'app-otp',
//   templateUrl: './otp.page.html',
//   styleUrls: ['./otp.page.scss'],
// })
// export class OtpPage {
//   mobileNumber: string = ''; // Variable to store the entered mobile number
//   enteredOtp: string = '';

//   constructor() {}

//   async verifyOtp() {
//     try {
//       // Assuming you have a method to retrieve the stored OTP from local storage
//       const storedOtp = localStorage.getItem('otp');

//       console.log('Verifying OTP for mobile number:', this.mobileNumber);
//       // Verifying the entered OTP with the stored OTP
//       if (this.enteredOtp === storedOtp) {
//         console.log('OTP verified successfully');
//         // Proceeding with whatever action you need to take upon successful OTP verification
//       } else {
//         console.log('Incorrect OTP');
//         // Handling incorrect OTP scenario, maybe show an error message to the user
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }

//   async openSmsCode() {
//     try {
//       // Request permission to read SMS
//       await SmsCodeReader['requestPermission']();

//       // Subscribe to SMS code events
//       SmsCodeReader['addListener']('onSmsReceived', (data: any) => {
//         const codeReceived = data.code;
//         console.log('Code received', codeReceived);
      
//         // Assuming the received code is stored in a variable named `codeReceived`
//         this.enteredOtp = codeReceived;
      
//         // After receiving the OTP, we can automatically verify it 
//         this.verifyOtp();
//       });

//       // Open SMS code reader
//       await SmsCodeReader['present']({ numberOfCharacters: 4 });
//     } catch (error) {
//       console.error('Error reading SMS code:', error);
//     }
//   }
  
  
  
// }










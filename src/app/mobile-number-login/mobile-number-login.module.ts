// mobile-number-login.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { MobileLoginPageRoutingModule } from './mobile-number-login-routing.module';
import { MobileNumberLoginPage } from './mobile-number-login.page';
import { OtpPage } from '../otp/otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    MobileLoginPageRoutingModule
  ],
  declarations: [MobileNumberLoginPage],
  providers: [OtpPage] // Provide the OTP service
})
export class MobileNumberLoginPageModule {}

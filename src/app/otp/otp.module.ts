import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 
import { FormsModule } from '@angular/forms';
import { OtpPageRoutingModule } from './otp-routing.module';
import { OtpPage } from './otp.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule, 
    FormsModule,
    OtpPageRoutingModule
  ],
  declarations: [OtpPage]
})
export class OtpPageModule {}

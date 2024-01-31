import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  // private baseUrl: string = 'https://gurubrahma-smsly-sms-to-india-v1.p.rapidapi.com';
  private baseUrl: string = 'https://rapidapi.com/iframe-apps/api-playground/latest/Playground.html?brand=default&locale=en-US&mode=light&apiId=5846c5d6e4b04857cac1e0fc&date=****-****-****-****&owner=dreamsoft&slug=smsly-sms-to-india';

  constructor(private http: HttpClient) {}

  verifyOtp(mobileNumber: string, otp: string): Observable<any> {
    const url = `${this.baseUrl}/otp/verify/${mobileNumber}/4/100/${otp}`;
    return this.http.get(url);
  }
}

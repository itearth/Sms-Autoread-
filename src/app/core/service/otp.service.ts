
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  private baseUrl: string = 'https://2factor.in/API/V1/7d84d134-26fe-11ed-9c12-0200cd936042';

  constructor(private http: HttpClient) {}

  sendOtp(mobileNumber: string, otp: string): Observable<any> {
    const url = `${this.baseUrl}/SMS/${mobileNumber}/${otp}/eVegah+SMS`;
    console.log('Request URL:', url);
  
    return this.http.get(url);
  }
  // private baseUrl: string = 'https://2factor.in/API/V1/7d84d134-26fe-11ed-9c12-0200cd936042';

  

  verifyOtp(mobileNumber: string, otp: string): Observable<any> {
    const url = `${this.baseUrl}/SMS/${mobileNumber}/${otp}/eVegah+SMS`;
    console.log('Request URL:', url);
  
    return this.http.get(url).pipe(
      tap((response: any) => console.log('Response:', response)),
      catchError(error => {
        console.error('Error:', error);
        throw error; // re-throw the error for further handling if needed
      })
    );
  }
}

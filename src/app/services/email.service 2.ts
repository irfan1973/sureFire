import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  email(emailparams: any) {
    return this.http.post<{ status: string; message: string }>(
      'https://www.surefiresecurity.com:3000/email',
      emailparams
    );
  }
}

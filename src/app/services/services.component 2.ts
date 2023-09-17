import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-service',
  templateUrl: 'services.component.html',
  styleUrls: ['services.component.css'],
})
export class ServicesComponent {
  constructor(private http: HttpClient) {}

  uploadFile(formData: any) {
    return this.http.post(
      'https://www.surefiresecurity.com:3000/upload',
      formData
    );
  }
}

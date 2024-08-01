import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mail } from '../../model/mail';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _apiUrl: string = "http://localhost:8080/api/v1/";

  constructor(private http: HttpClient) { }

  public sendMail(mail: Mail) {
    // this.http.post<Mail>(`${this._apiUrl}mails`)
  }
}

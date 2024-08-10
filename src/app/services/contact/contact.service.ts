import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mail } from '../../model/mail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _apiUrl: string = "http://92.112.179.24:8080/api/v1/";

  constructor(private http: HttpClient) { }

  public sendMail(mail: Mail): Observable<Mail> {
    console.log(mail)
    return this.http.post<Mail>(`${this._apiUrl}mails`, mail).pipe(
      res => res,
      error => error
    );
  }
}

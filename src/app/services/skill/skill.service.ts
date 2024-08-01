import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../../model/skill';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private _apiUrl: string = "http://localhost:8080/api/v1/";
  
  constructor(private http: HttpClient) { }

  public findAll(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this._apiUrl}skills`).pipe(
      res => res,
      error => error
    );
  }
}

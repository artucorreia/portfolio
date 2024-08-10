import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../../model/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _apiUrl: string = "http://92.112.179.24:8080/api/v1/";
  
  constructor(private http: HttpClient) { }

  public findAll(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this._apiUrl}projects`).pipe(
      res => res,
      error => error
    );
  }
}

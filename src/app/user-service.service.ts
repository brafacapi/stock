import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any>{
    return this.http.get('https://localhost:7233/Api/UsersModels');
  }
}

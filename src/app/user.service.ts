import { Injectable } from '@angular/core';
// @ts-ignore
import {Users} from './interfaces/users.interface';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from './interfaces/user.interface';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) { }
  getUsers(): Observable<Users>{
    return this.http.get('http://localhost:3000/users');
  }
  getUser(id: number): Observable<any>{
    return this.http.get(`http://localhost:3000/users/${id}`);
  }
  createUser(user: User): any{
    return this.http.post(`http://localhost:3000/users/registration`, user);
  }
  updateUser(id: number, body: any): any {
    return this.http.put(`http://localhost:3000/users/${id}`, body);
  }
}

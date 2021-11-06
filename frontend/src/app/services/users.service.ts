import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/User';
 
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }
    getUsers() {
      return this.http.get(`${this.API_URI}/users`);
   }

   getUser(id: string) {
     return this.http.get(`${this.API_URI}/users/${id}`)
   }

   deleteUser(id: string) {
     return this.http.delete(`${this.API_URI}/users/${id}`)
   }

   postUser(user: User) {
     return this.http.post(`${this.API_URI}/users`, user)
   }

   updateUser(updateUser: User) {
     return this.http.put(`${this.API_URI}/users/${updateUser.id}`, updateUser);
   }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  /**
   * Get users list
   */
  public getUsers() {
    return this.http.get(`${environment.apiUrl}/users`);
  }

  /**
   * Get user by id
   * @param id user id
   */
  public getUser(id: number) {
    if (id) {
      return this.http.get(`${environment.apiUrl}/users/${id.toString()}`);
    }
  }

  /**
   * Create new user
   * @param payload body to send to the backend
   */
  public createUser(payload: User) {
    return this.http.post(`${environment.apiUrl}/users`, payload);
  }

  /**
   * Edit user by id
   * @param id user id
   */
  public editUser(id: number, payload: User) {
    if (id) {
      return this.http.put(`${environment.apiUrl}/users/${id.toString()}`, payload);
    }
  }

  /**
   * Delete user by id
   * @param id user id
   */
  public deleteUser(id: number) {
    if (id) {
      return this.http.delete(`${environment.apiUrl}/users/${id.toString()}`);
    }
  }
}
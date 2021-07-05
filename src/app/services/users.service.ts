import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users } from '../models/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private currentUserSubject : BehaviorSubject<any>;
  private currentUser : Observable<any>;

  private registerProprietaire='http://localhost:8080/register/proprietaire';
  private registerPreneur='http://localhost:8080/register/preneur';
  private registerAdmin='http://localhost:8080/register/admin';
  private loginUsers='http://localhost:8080/login';
  private getAllUsers='http://localhost:8080/getAllUsers';
  private getCurrentUser='http://localhost:8080/getUser/';
  private updateCurrentUser='http://localhost:8080/editUser/';
  private deleteCurrentUser='http://localhost:8080/deleteUser/';
  

  constructor(private httpClient: HttpClient, private router: Router) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  addProprietaire(user:Users) {
    return this.httpClient.post<any>(this.registerProprietaire, user);
  }

  addPreneur(user:Users) {
    return this.httpClient.post<any>(this.registerPreneur, user);
  }

  addAdmin(user:Users) {
    return this.httpClient.post<any>(this.registerAdmin, user);
  }

  public get currentUserValue() : Users {
    return this.currentUserSubject.value;
  }

  loginUser(username, password) {
    return this.httpClient.post<any>(this.loginUsers, {username, password})
    .pipe(map( user=> {
      console.log(user)
      if(user.user){
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }
      return null;
    }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  getUsers() {
    return this.httpClient.get<any>(this.getAllUsers);
  }

  getUser(id: String) {
    return this.httpClient.get<any>(this.getCurrentUser+ id);
  }

  updateUser(user:Users, id: String) {
    return this.httpClient.put<any>(this.updateCurrentUser+ id, user);
  }

  deleteUser(id: String) {  
    return this.httpClient.delete<any>(this.deleteCurrentUser+ id);  
  }  

}

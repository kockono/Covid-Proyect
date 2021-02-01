import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Libreria para recibir peticiones o enviar peticiones a servidores (Apis)
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router: Router) { }

  private URL = 'http://localhost:3000/api';

  signUp(user){
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signIn(user){
    return this.http.post<any>(this.URL + '/signin', user);
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}

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
  encuestas(encuesta){
    return this.http.post<any>(this.URL + '/respuesta/60205f5f186773f001b67269', encuesta);
  }

}

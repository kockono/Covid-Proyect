import { AuthServicee } from './services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';


@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthServicee,
              private router: Router,
              private auth:AuthService
              )  { }

  canActivate( ): boolean {



    if(this.authService.loggedIn()){
      return true;
    }
    this.router.navigate(['/login'])
    return false;
  }

  }


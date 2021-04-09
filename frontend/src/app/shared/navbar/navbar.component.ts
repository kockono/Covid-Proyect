import { AuthServicee } from './../../services/auth.service';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  valido:boolean = false;

  constructor(@Inject(DOCUMENT) public document: Document,public auth: AuthService,
    public authService:AuthServicee) { 

      this.Verificar();
    }

  ngOnInit(): void {
  }

  Verificar(){
    this.valido = this.authService.loggedIn()

  }

  logOut(){
    this.valido = false;
    this.authService.logOut()

  }
}

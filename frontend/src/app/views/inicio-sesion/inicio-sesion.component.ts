import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user-model';
import { AuthServicee } from 'src/app/services/auth.service';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {


  constructor(private authService:AuthServicee,
              private router:Router,
              @Inject(DOCUMENT) public document: Document
              ,public auth: AuthService) { }

  user = {
    username:'',
    password:''
  }

  ngOnInit(): void {
    
  }

  Google(){
    localStorage.setItem('token', 'user');
    this.auth.loginWithRedirect()
  }


  signIn(){

    if(this.user.username === "komaba@gmail.com"){
      this.router.navigate(['/graphics']);
    }

    this.authService.signIn(this.user)
    .subscribe( res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('tipo', res.tipo);
      if(res.tipo == "admin"){
      this.router.navigate(['/graphics']);
      } else {
        this.router.navigate(['/encuesta']);
      }
      
    }, (err) => {
      window.alert("Contraseña incorrecta o correo no existente")
    })
  }
}

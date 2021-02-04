import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user-model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {


  constructor(private authService:AuthService,
              private router:Router) { }

  user = {
    username:'',
    password:''
  }

  ngOnInit(): void {
    
  }
  
  signIn(){
    console.log(this.user);
    this.authService.signIn(this.user)
    .subscribe( res => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['/user']);
      
    }, (err) => {
      window.alert("Contraseña incorrecta")
    })
  }
}

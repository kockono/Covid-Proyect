import { User } from './../../models/user-model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicee } from 'src/app/services/auth.service';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  constructor(private authService:AuthServicee,
              private router:Router,
              private fb:FormBuilder) 
  { }

  form: FormGroup;


  ngOnInit(): void {
    this.makeValidations()
  }

  signUp(){

    if(this.form.value.password != this.form.value.password2) {
      window.alert("Las contraseña no coincide");
      return
    }
    
    this.authService.signUp(this.form.value).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/encuesta'])
      },
     (err) =>{
        window.alert("El usuario ya existe")
     })
  }

  isValid(type: string) {
    return this.form.get(`${type}`).invalid && this.form.get(`${type}`).touched;
  }

  makeValidations(){

    this.form = this.fb.group({ 
       nombre    : ['', Validators.required],
       password  : ['', [Validators.required, Validators.minLength(5)]],
       password2 : ['', [Validators.required, Validators.minLength(5)]],
       apellido  : ['', Validators.required],
       username  : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
       tipo      : [0]

    })

  }

}

export class RestResult {
  succeeded: boolean;
  message: string;
  data: any;
  token
  errors: [string];
}
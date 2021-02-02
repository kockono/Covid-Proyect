import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  constructor(private authService:AuthService) { }

  Encuestas = {
    pregunta1:'',
    pregunta2:'',
    pregunta3:'',
    pregunta4:'',
    pregunta5:'',
    encuestado:'',
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.encuestas(this.Encuestas).subscribe(res => {

    })
  }

}

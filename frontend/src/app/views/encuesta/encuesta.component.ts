import { AuthServicee } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  constructor(private authService:AuthServicee) { }

  EncuestasComposicion ={
    pregunta1: 0,
    pregunta2: 0,
    pregunta3: 0,
    pregunta4: 0,
    pregunta5: 0,

  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.sendEncuesta(this.EncuestasComposicion).subscribe();
  }


}

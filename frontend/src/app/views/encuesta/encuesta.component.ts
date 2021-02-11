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
      pregunta1: {
        frecuente: 0,
        pocoFrecuente: 0,
        nunca: 0
    },
    pregunta2: {
        si: 0,
        no: 0
    },
    pregunta3: {
        si: 0,
        no: 0
    },
    pregunta4: {
        muySeguido: 0,
        seguido: 0,
        noTanSeguido: 0,
        nadaSeguido: 0
    },
    pregunta5: {
        si: 0,
        no: 0
    }
  }

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
    
    console.log(this.EncuestasComposicion)
    // this.authService.encuestas(this.Encuestas).subscribe(res => {

    // })
  }

}

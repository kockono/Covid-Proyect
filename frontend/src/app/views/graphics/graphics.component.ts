import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Encuesta } from 'src/app/models/encuesta-mode';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {

  constructor(public encuesta:AuthService) { }

  public DataEncuesta:Encuesta;

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.encuesta.getEncuestas().subscribe((res:Encuesta) => {
      this.DataEncuesta = res;
      console.log(this.DataEncuesta);
    })
  }

}

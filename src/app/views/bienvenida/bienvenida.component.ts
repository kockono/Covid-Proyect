import { Component, OnInit } from '@angular/core';

// Importanción de servicios
import { ApiCovidService } from './../../services/api-covid.service';
@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  constructor(public apiCovid:ApiCovidService) {  // Aquí instanciamos el servicio que contiene los metodos de la Api en la variable  --apiCovid--

  } 

  Data:any; // Variable con toda la información del api de Covid

  ngOnInit(): void {
    this.getData(); // Llamada al metodo que contiene la llamada de la Apí
  }

  getData() {
    this.Data = this.apiCovid.getCovidInfo().subscribe(res => {  // Aquí igualamos la info que trae la api del servicio en la variable --Data--

      console.info(res) // Un Console.info para ver la respuesta que nos trae el servidor o la Api 
    });
  }

}

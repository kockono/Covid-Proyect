import { AuthServicee } from 'src/app/services/auth.service';
import { Component, Inject, OnInit } from '@angular/core';

// Importanción de servicios
import { ApiCovidService } from './../../services/api-covid.service';

// Models
import { Welcome } from 'src/app/models/covid-json.model';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  Data:Welcome;      // Variable con toda la información del api de Covid
  DataEncuesta:any;  // Variable con toda la información de las encuestas

  constructor(public apiCovid:ApiCovidService, public encuesta:AuthServicee,
    @Inject(DOCUMENT) public document: Document
  ,public auth: AuthService) {  // Aquí instanciamos el servicio que contiene los metodos de la Api en la variable  --apiCovid--
    
  } 

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65], label: 'A'},
    {data: [28], label: 'B'},
    {data: [28], label: 'C'},
    {data: [28], label: 'D'}
  ];


  ngOnInit() {
    this.getData(); // Llamada al metodo que contiene la llamada de la Apí
    
  }

  getData() {
    this.apiCovid.getCovidInfo().subscribe((res:Welcome) => {  // Peticición al servicio para que haga la petición
      console.info(res) // Un Console.info para ver la respuesta que nos trae el servidor o la Api 
      this.Data = res   // Aquí igualamos la info que trae la api del servicio en la variable --Data--
    });
    this.encuesta.getEncuestas().subscribe(res => {
      this.DataEncuesta = res;
    })
  }

}

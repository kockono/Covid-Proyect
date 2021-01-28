import { Component, OnInit } from '@angular/core';

// Importanción de servicios
import { ApiCovidService } from './../../services/api-covid.service';

// Librerias Agenas
import {Chart} from 'node_modules/chart.js';
@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  constructor(public apiCovid:ApiCovidService) {  // Aquí instanciamos el servicio que contiene los metodos de la Api en la variable  --apiCovid--

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

  Data:any; // Variable con toda la información del api de Covid

  ngOnInit() {
   
    this.getData(); // Llamada al metodo que contiene la llamada de la Apí
  }

  getData() {
    this.Data = this.apiCovid.getCovidInfo().subscribe(res => {  // Aquí igualamos la info que trae la api del servicio en la variable --Data--
      console.info(res) // Un Console.info para ver la respuesta que nos trae el servidor o la Api 
    });
  }

}

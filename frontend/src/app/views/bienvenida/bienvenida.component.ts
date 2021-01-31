import { Component, OnInit } from '@angular/core';

// Importanción de servicios
import { ApiCovidService } from './../../services/api-covid.service';

// Models
import { Welcome } from 'src/app/models/covid-json.model';


@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  Data:Welcome; // Variable con toda la información del api de Covid

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


  ngOnInit() {
    this.getData(); // Llamada al metodo que contiene la llamada de la Apí
    
  }

  getData() {
    this.apiCovid.getCovidInfo().subscribe((res:Welcome) => {  // Peticición al servicio para que haga la petición
      console.info(res) // Un Console.info para ver la respuesta que nos trae el servidor o la Api 
      this.Data = res   // Aquí igualamos la info que trae la api del servicio en la variable --Data--
    });
  }

}

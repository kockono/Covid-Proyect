import { AuthServicee } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Encuesta } from 'src/app/models/encuesta-mode';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {

  barChartData1:any[]
  barChartData2:any[]
  barChartData3:any[]
  barChartData4:any[]
  barChartData5:any[]

  public DataEncuesta:Encuesta;
  public loading:boolean = false;

  constructor(public encuesta:AuthServicee) {

    this.encuesta.getEncuestas().subscribe((res:Encuesta) => {
      this.DataEncuesta = res;
      console.log(this.DataEncuesta);
      
      this.barChartData1 = [

        {data:[this.DataEncuesta.pregunta1.frecuente,this.DataEncuesta.pregunta1.pocoFrecuente,this.DataEncuesta.pregunta1.nunca],
        backgroundColor:[
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
        ],
        hoverBackgroundColor:[
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
      ];

      this.barChartData2 = [
        //datos pregunta2 separados por coma
        {data:[this.DataEncuesta.pregunta2.si,this.DataEncuesta.pregunta2.no],
        backgroundColor:[
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
        ],
        hoverBackgroundColor:[
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
      ];

      this.barChartData3 = [
        //datos pregunta3 separados por coma
        {data:[this.DataEncuesta.pregunta3.si,this.DataEncuesta.pregunta3.no],
        backgroundColor:[
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
        ],
        hoverBackgroundColor:[
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
      ];

      this.barChartData4 = [
        //datos pregunta4 separados por coma
        {data:[this.DataEncuesta.pregunta4.muySeguido,this.DataEncuesta.pregunta4.nadaSeguido,this.DataEncuesta.pregunta4.noTanSeguido,this.DataEncuesta.pregunta4.seguido],
        backgroundColor:[
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
        ],
        hoverBackgroundColor:[
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
      ];

      this.barChartData5 = [
        //datos pregunta5 separados por coma
        {data:[this.DataEncuesta.pregunta5.si,this.DataEncuesta.pregunta5.no],
        backgroundColor:[
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
        ],
        hoverBackgroundColor:[
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
      ];
      this.loading = true;
    })

   }



  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels1 = ['Frecuente', 'Poco frecuente', 'Nunca'];
  public barChartLabels2 = ['Si', 'No'];
  public barChartLabels3 = ['Si', 'No'];
  public barChartLabels4 = ['Muy seguido', 'Seguido', 'No tan seguido','Nada seguido'];
  public barChartLabels5 = ['Si', 'No'];
  public barChartType = 'bar';
  public barChartLegend = false;

  ngOnInit(): void {
   
  }

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];

  public barChartData = [
    {data: [65], label: 'A'},
    {data: [28], label: 'B'},
    {data: [28], label: 'C'},
    {data: [28], label: 'D'}
  ];

}

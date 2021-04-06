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

}

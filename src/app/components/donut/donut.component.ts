import { Component, Input } from '@angular/core';

//import { MultiDataSet, Label } from 'ng2-charts'
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent {

  @Input() title: string = 'Sin titulo'; //todos los inputs estos seran el default si no ponemos nada

  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = { //esto seria el MultiDataSet
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] }
    ]
  };
  //public doughnutChartType: ChartType = 'doughnut'; --> lo quitamos pues en el html hemos puesto type="doughnut" en vez de [] y tales



}

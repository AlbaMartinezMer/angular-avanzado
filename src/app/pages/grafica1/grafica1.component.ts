import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  public labels0: string[] = [ 'Pepinos', 'Cebollas', 'Hortalizas' ];
  public data0 = { //esto seria el MultiDataSet
    labels: this.labels0,
    datasets: [
      { data: [ 50, 30, 20 ] }
    ]
  };

  public labels1: string[] = [ 'Patatas', 'Pan', 'Pizza' ];
  public data1 = { //esto seria el MultiDataSet
    labels: this.labels1,
    datasets: [
      { data: [ 45, 75, 10 ] }
    ]
  };


}

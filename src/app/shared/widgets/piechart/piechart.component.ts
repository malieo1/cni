import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {

  constructor() { }
  
  chartOptions : {} ;
  Highcharts = Highcharts;
  ngOnInit() {
    this.chartOptions ={
      chart: {
        styledMode: false
    },

    title: {
        text: 'Nombre des employés par groupes'
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [{
        type: 'pie',
        allowPointSelect: true,
        keys: ['name', 'y', 'selected', 'sliced'],
        data: [
            ['groupe 1', 29.9, false],
            ['groupe 2', 71.5, false],
            ['groupe 3', 106.4, false],
            ['groupe 4', 129.2, false],
            ['groupe 5', 144.0, false],
            ['groupe 6 ', 176.0, false],
            ['groupe maghzoun', 135.6, true, true],
            ['groupe 8', 148.5, false]
        ],
        showInLegend: true
    }]

    }
    HC_exporting(this.Highcharts)
  }

}

import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions : {} ;
  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions ={
      chart: {
        type: 'column',
        styledMode: false
    },

    title: {
        text: 'nombre des nouveaux employés par mois'
    },

    yAxis: [{
        className: 'highcharts-color-0',
        title: {
            text: 'Primary axis'
        }
    }, {
        className: 'highcharts-color-1',
        opposite: true,
        title: {
            text: 'Secondary axis'
        }
    }],

    plotOptions: {
        column: {
            borderRadius: 5
        }
    },

    series: [{
        data: [1, 3, 2]
    }, {
        data: [324, 124, 547, 221],
        yAxis: 1
    }]

    }; 
  }
}



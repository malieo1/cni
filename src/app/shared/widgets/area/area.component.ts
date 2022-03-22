import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';




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
            text: 'nombre des employés'
        }
    }, {
        className: 'highcharts-color-1',
        opposite: true,
        title: {
            text: 'axe de temps'
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
    HC_exporting(Highcharts);

    setTimeout (() => {
      window.dispatchEvent (
        new Event ('resize')
      );
    },20);
  };
}


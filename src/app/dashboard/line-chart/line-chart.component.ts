import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit, AfterViewInit {
  @ViewChild('lineChart') lineChart: ElementRef<HTMLCanvasElement>;
  constructor() {}

  ngAfterViewInit(): void {
    let ctx = this.lineChart.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: '2021 sales',
            data: [11000, 12000, 15000, 20000, 8000, 10000, 15000],
            borderWidth: 2,
            borderColor: '#3160D8',
            backgroundColor: 'transparent',
            pointBorderColor: 'transparent',
          },
          {
            label: '2020 sales',
            data: [7800, 9000, 20000, 16000, 9000, 6000, 13200, 18500, 29000, 10805, 12500, 10100],
            borderWidth: 2,
            borderDash: [2, 2],
            borderColor: '#BCBABA',
            backgroundColor: 'transparent',
            pointBorderColor: 'transparent',
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontSize: '12',
                fontColor: '#777777',
              },
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontSize: '12',
                fontColor: '#777777',
                callback: function (value, index, values) {
                  return value + '€';
                },
              },
              gridLines: {
                color: '#D8D8D8',
                zeroLineColor: '#D8D8D8',
                borderDash: [2, 2],
                zeroLineBorderDash: [2, 2],
                drawBorder: false,
              },
            },
          ],
        },
      },
    });
  }

  ngOnInit(): void {}

}

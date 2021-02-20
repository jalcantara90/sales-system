import { Chart } from 'chart.js';
import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss'],
})
export class DonutChartComponent implements AfterViewInit {
  @ViewChild('donutChart') donutChart: ElementRef<HTMLCanvasElement>;

  constructor() {}

  ngAfterViewInit(): void {
    let ctx = this.donutChart.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Snak and dessers', 'Main dishes', 'Beverages'],
        datasets: [
          {
            data: [15, 45, 40],
            backgroundColor: ['#FF8B26', '#285FD3', '#FFC533'],
            hoverBackgroundColor: ['#FF8B26', '#285FD3', '#FFC533'],
            borderWidth: 5,
            borderColor: '#fff',
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        cutoutPercentage: 80,
      },
    });
  }
}

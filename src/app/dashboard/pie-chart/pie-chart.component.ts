import { Chart } from 'chart.js';
import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements AfterViewInit {
  @ViewChild('pieChart') pieChart: ElementRef<HTMLCanvasElement>;

  constructor() {}

  ngAfterViewInit(): void {
    let ctx = this.pieChart.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'pie',
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
      },
    });
  }
}

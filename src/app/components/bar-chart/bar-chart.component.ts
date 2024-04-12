import { Component } from '@angular/core';

import { PopoutWindowModule } from 'angular-opinionated-popout-window';

import { FakeDataService } from '../../services/fake-data.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [PopoutWindowModule],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {
  title = 'Test Chart';
  chart: any = [];

  subscription: any;
  private chartData: any;

  constructor(public fakeData: FakeDataService) {
    this.chartData = this.fakeData.getColors();
  }

  ngOnInit() {
    this.subscription = this.fakeData
      .getColorIncrementEmitter()
      .subscribe((color) => {
        console.log(`${color} was updated by 1!`);
        console.log(this.fakeData.getColors());
        this.updateChartData();
      });

    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: this.fakeData.getColors(),
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  private updateChartData(): void {
    this.chart.data.datasets = [{
      label: '# of Votes',
      data: this.fakeData.getColors(),
      borderWidth: 1,
    }];
    this.chart.update();
    console.log('new chart data', this.chart.data.datasets.data);
  }
}

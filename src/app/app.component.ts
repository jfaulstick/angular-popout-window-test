import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { PopoutWindowModule } from 'angular-opinionated-popout-window';
import { PopoutWindowModule } from 'angular-popout-window'

import { FakeDataService } from './services/fake-data.service';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { CounterControlsComponent } from './components/counter-controls/counter-controls.component';
import { CounterComponent } from './components/counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BarChartComponent,
    CounterControlsComponent,
    CounterComponent,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatToolbarModule,
    PopoutWindowModule,
    RouterOutlet,
  ],
  providers: [FakeDataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-popout-testapp';

  constructor(public fakeData: FakeDataService) {}
}

import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { PopoutWindowModule } from 'angular-opinionated-popout-window';

import { FakeDataService } from '../../services/fake-data.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [PopoutWindowModule, MatChipsModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  public count: number = 0;

  constructor(public fakeData: FakeDataService) {}
}

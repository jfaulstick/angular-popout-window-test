import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PopoutWindowModule } from 'angular-opinionated-popout-window';

import { FakeDataService } from '../../services/fake-data.service';


@Component({
  selector: 'app-counter-controls',
  standalone: true,
  imports: [PopoutWindowModule, MatButtonModule, MatCardModule],
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.scss'],
})
export class CounterControlsComponent {

  constructor(public fakeData: FakeDataService) {}

  public handleClick(num: number): void {
    // this.fakeData.incrementCount(num);
  }
}

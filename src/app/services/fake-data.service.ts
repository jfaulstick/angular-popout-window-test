import { Injectable, EventEmitter } from '@angular/core';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


@Injectable({
  providedIn: 'root',
})
export class FakeDataService {
  colorIncrement: EventEmitter<string> = new EventEmitter();

  private colors: number[];

  // Bar Chart Values
  private red: number = 12;
  private blue: number = 19;
  private yellow: number = 3;
  private green: number = 5;
  private purple: number = 2;
  private orange: number = 8;

  constructor() {
    this.colors = [
      this.red,
      this.blue,
      this.yellow,
      this.green,
      this.purple,
      this.orange,
    ];
  }

  public emitColorIncrementEvent(color: string) {
    this.colorIncrement.emit(color);
    console.log(this.colors);
  }

  public getColorIncrementEmitter() {
    return this.colorIncrement;
  }

  public getCount(): number {
    return this.red + this.blue + this.yellow + this.green + this.purple + this.orange;
  }

  public getColors(): Array<number> {
    return [
      this.red,
      this.blue,
      this.yellow,
      this.green,
      this.purple,
      this.orange,
    ];
  }

  public incrementColor(color: string, num: number): void {
    switch (color) {
      case 'red':
        this.red = this.red + num;
        this.emitColorIncrementEvent('red');
        break;
      case 'blue':
        this.blue = this.blue + num;
        this.emitColorIncrementEvent('blue');
        break;
      case 'yellow':
        this.yellow = this.yellow + num;
        this.emitColorIncrementEvent('yellow');
        break;
      case 'green':
        this.green = this.green + num;
        this.emitColorIncrementEvent('green');
        break;
      case 'purple':
        this.purple = this.purple + num;
        this.emitColorIncrementEvent('purple');
        break;
      case 'orange':
        this.orange = this.orange + num;
        this.emitColorIncrementEvent('orange');
        break;
      default:
        break;
    }
  }

  public resetColors(): void {
    this.red = 0;
    this.blue = 0;
    this.yellow = 0;
    this.green = 0;
    this.purple = 0;
    this.orange = 0;
    this.emitColorIncrementEvent('all');
  }
}

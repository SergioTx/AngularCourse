import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('numberChanged') eventEmitter = new EventEmitter<number>();
  counter: number = 0;
  private _interval;

  constructor() { }

  ngOnInit() {
  }

  startEvent() {
    this._interval = setInterval(() => {
      this.eventEmitter.emit(this.counter);
      this.counter++;
    }, 1000);
  }

  stopEvent() {
    clearInterval(this._interval);
  }
}

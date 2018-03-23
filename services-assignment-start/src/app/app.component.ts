import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toActiveCounter: number;
  toInactiveCounter: number;

  constructor(private usersService: UsersService, private counterService: CounterService) {
    this.toActiveCounter = this.counterService.toActiveCounter;
    this.toInactiveCounter = this.counterService.toInactiveCounter;
    this.counterService.countUpdated.subscribe(
      () => {
        this.toActiveCounter = this.counterService.toActiveCounter;
        this.toInactiveCounter = this.counterService.toInactiveCounter;
      }
    );
  }

  onSetToInactive(id: number) {
    this.usersService.setInactive(id);
  }

  onSetToActive(id: number) {
    this.usersService.setActive(id);
  }
}

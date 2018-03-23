import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binder',
  templateUrl: './data-binder.component.html',
  styleUrls: ['./data-binder.component.css']
})
export class DataBinderComponent implements OnInit {
  username = '';

  constructor() { }

  ngOnInit() {
  }

  resetUsername(){
    this.username = '';
  }

}

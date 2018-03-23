import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails = false;
  clicks = [];

  buttonClick(){
    this.showDetails = !this.showDetails;
    this.clicks.push(new Date().toLocaleString());
  }

  getColor(el){
    if (el >= 5){
      return 'blue';
    }
  }
}

import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  subscriptionOptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';

  onSubmit() {
    console.log(this.form);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  logEvent($event: Event) {
    console.log($event);
    this.config = $event;
  }

  config = {};

  title = 'configurator';
  name = 'lea';
  test = `hello ${this.name}`;
  names = ['liv', 'dominic'];
}

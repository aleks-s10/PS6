import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'check-weather';
  displayWeather: boolean = false;
  fetchData() {
    this.displayWeather = true;
  }
}

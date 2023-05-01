import { Component } from '@angular/core';
import { weatherInfo } from 'src/static/weatherInfo';
import { WeatherBoston } from 'src/static/WeatherBoston';

@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.css']
})
export class DisplayWeatherComponent {
  weatherInfo: WeatherBoston = weatherInfo;
  weatherInfoArray: [string, number][] = Object.entries(this.weatherInfo);
}

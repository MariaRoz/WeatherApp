import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../../services/get-data.service';
import { Weather } from '../../../models/weather.interface';
import {Forecast} from '../../../models/forecast.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherDate: Weather[] = [];
  displayedColumns: string[] = ['date', 'min', 'max'];

  constructor(private service: GetDataService) { }

  ngOnInit(): void {
    this.service.getWeather().subscribe((forecast: Forecast) => {
       this.weatherDate = forecast.data.weather;
    }
    );
  }

}

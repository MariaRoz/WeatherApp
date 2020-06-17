import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../../services/get-data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather = [];
  displayedColumns: string[] = ['date', 'min', 'max'];

  constructor(private service: GetDataService) { }

  ngOnInit(): void {
    this.service.getWeather().subscribe((res: any) => { this.weather = res.data.weather; console.log(this.weather);
    }
    );
  }

}

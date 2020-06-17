import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_KEY = 'd698e32453754dbd81f230238201606';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private http: HttpClient) {}

  getWeather() {
    const restUrl = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${API_KEY}&q=Kharkov&num_of_days=3&tp=3&format=json`;
    return this.http.get(restUrl);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseURL = "https://api.openweathermap.org/data/2.5/weather?";

  constructor(
    private httpClient : HttpClient
  ) { }

  getWeatherForCurrentLocation(latitude:number,longitude:number){
    return this.httpClient.get(this.baseURL + 'lat=' + latitude + '&lon='+ longitude + '&appid=8d65b434e0cdc0da95db65116d086dc0&units=metric')
  }
  
 

}

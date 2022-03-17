import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseURL = "https://api.openweathermap.org/data/2.5/weather?";

  constructor(
    private http : HttpClient
  ) { }

  getWeatherForCurrentLocation(latitude:string,longitude:string){
    return this.http.get(this.baseURL + 'lat=' + latitude + '&lon='+ longitude + '&appid=8d65b434e0cdc0da95db65116d086dc0')
  }

 

}

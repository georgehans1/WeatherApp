import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  data: any;

  constructor(
    private http : HttpClient
  ) { }

  getWeatherByLocation(location:string){
   return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" +location+ "&appid=8d65b434e0cdc0da95db65116d086dc0")
  }

  getsWeatherByLocation(location:string){
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" +location+ "&appid=8d65b434e0cdc0da95db65116d086dc0").subscribe((data)=>{
      this.data = data
      console.log(data)
    })
   }
}

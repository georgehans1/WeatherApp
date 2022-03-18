import { Component, OnInit } from '@angular/core';
import { catchError, retry } from 'rxjs';
import { Temperature } from 'src/app/classes/temperature/temperature';
import { SearchService } from 'src/app/services/search/search.service';
import { UserPreferencesService } from 'src/app/services/UserPreferences/user-preferences.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
location:string = "";
data: any;
isError:boolean = false;
error_message : string = "";
temperature:Temperature = new Temperature();
unit:string="C"

  constructor(
    private searchService:SearchService,
    private userPreferences:UserPreferencesService
  ) { }

  ngOnInit(){
  
  }

  ngAfterViewInit(){
    this.userPreferences.adjustMenuBar()
  }
  // getWeatherByLocation(){
  //   this.searchService.getWeatherByLocation(this.location).subscribe({
  //    next:(data:any) => {
  //     this.isError = false;
  //     this.data = data;
  //     this.temperature.current_temperature = Math.round(this.data.main.temp);
  //     this.temperature.min_temperature = Math.round(this.data.main.temp_min);
  //     this.temperature.max_temperature = Math.round(this.data.main.temp_max);
  //     this.temperature.description = this.data.weather[0].description;
  //     this.temperature.icon = this.data.weather[0].icon;
  //     this.temperature.feels_like = Math.round(this.data.main.feels_like);
  //     this.temperature.humidity = this.data.main.humidity;
  //     this.temperature.wind = Math.round(this.data.wind.speed * 3.6);
  //     this.temperature.pressure = this.data.main.pressure;
  //     this.convertMainTemp();
  //     this.convertMaxTemp();
  //     this.convertMinTemp();
  //     this.convertFeelsLikeTemp();
  //    },
  //     error : (e:ErrorEvent) => {
  //       return e;
  //   }})
    
  // }
 
  getWeatherByLocation(){
    this.searchService.getWeatherByLocation(this.location).subscribe({
     next:(data:any) => {
      this.isError = false;
      this.data = data;
      this.temperature.current_temperature = Math.round(this.data.main.temp);
      this.temperature.min_temperature = Math.round(this.data.main.temp_min);
      this.temperature.max_temperature = Math.round(this.data.main.temp_max);
      this.temperature.description = this.data.weather[0].description;
      this.temperature.icon = this.data.weather[0].icon;
      this.temperature.feels_like = Math.round(this.data.main.feels_like);
      this.temperature.humidity = this.data.main.humidity;
      this.temperature.wind = Math.round(this.data.wind.speed * 3.6);
      this.temperature.pressure = this.data.main.pressure;
      this.convertMainTemp();
      this.convertMaxTemp();
      this.convertMinTemp();
      this.convertFeelsLikeTemp();
     },
      error : (e) => {
        // this.error_message = e.error.message;
        this.errorHandler(e)
    }})
    
  }

  errorHandler(error:any){
      this.error_message = error.error.message
      this.isError = true;
      console.log(this.error_message)
    
  }


 
  convertMainTemp() {
    this.temperature.temp_celcius = this.temperature.current_temperature;
    this.temperature.temp_fahrenheit = Math.round((this.temperature.current_temperature * 9 / 5) + 32);
  }

  convertMaxTemp() {
    this.temperature.max_temp_celcius = this.temperature.max_temperature;
    this.temperature.max_temp_fahrenheit =  Math.round((this.temperature.max_temperature * 9 / 5) + 32);
  }
  convertMinTemp() {
    this.temperature.min_temp_celcius = this.temperature.min_temperature;
    this.temperature.min_temp_fahrenheit =  Math.round((this.temperature.min_temperature * 9 / 5) + 32);
  }

  convertFeelsLikeTemp(){
    this.temperature.feels_like_celcius = this.temperature.feels_like
    this.temperature.feels_like_fahrenheit =  Math.round((this.temperature.feels_like * 9 / 5) + 32);
  }
  
  changeUnit() {
    this.temperature.isCelcius = this.userPreferences.isCelcius;
    if (this.temperature.isCelcius) {
      this.temperature.current_temperature = this.temperature.temp_celcius;
      this.temperature.max_temperature = this.temperature.max_temp_celcius;
      this.temperature.min_temperature = this.temperature.min_temp_celcius;
      this.temperature.feels_like = this.temperature.feels_like_celcius;
      this.unit = "C";
    }
    if (!this.temperature.isCelcius) {
      this.temperature.current_temperature = this.temperature.temp_fahrenheit;
      this.temperature.max_temperature = this.temperature.max_temp_fahrenheit;
      this.temperature.min_temperature = this.temperature.min_temp_fahrenheit;
      this.temperature.feels_like = this.temperature.feels_like_fahrenheit;
      this.unit = "F";
    }
  }

}

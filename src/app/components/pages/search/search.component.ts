import { Component, OnInit } from '@angular/core';
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
error_message : string = "";
temperature:Temperature = new Temperature();
  constructor(
    private searchService:SearchService,
    private userPreferences:UserPreferencesService
  ) { }

  ngOnInit(){
  
  }

  ngAfterViewInit(){
    this.userPreferences.adjustMenuBar()
  }

  getWeatherByLocation(){
    console.log(this.location)
    this.searchService.getWeatherByLocation(this.location).subscribe(
      (data)=>{
        this.data = data;
        this.temperature.current_temperature = this.data.main.temp;
        this.temperature.min_temperature = this.data.main.temp_min;
        this.temperature.max_temperature = this.data.main.temp_max;
        this.temperature.description = this.data.weather[0].description;
        this.temperature.icon = this.data.weather[0].icon;
        this.temperature.feels_like = this.data.main.feels_like;
        this.temperature.humidity = this.data.main.humidity;
        this.temperature.wind = this.data.wind.speed * 3.6;
        this.temperature.pressure = this.data.main.pressure;
        this.convertCurrentTemp();
        this.convertMaxTemp();
        this.convertMinTemp();
        this.convertFeelsLikeTemp();
      },
      (error) => {
          this.error_message = error.error.message;
      }
    )
  }
  convertCurrentTemp() {
    this.temperature.temp_celcius = this.temperature.current_temperature;
    this.temperature.temp_fahrenheit = (this.temperature.current_temperature * 9 / 5) + 32;
    console.log(this.temperature.temp_celcius);
    console.log(this.temperature.temp_fahrenheit);
  }

  convertMaxTemp() {
    this.temperature.max_temp_celcius = this.temperature.max_temperature;
    this.temperature.max_temp_fahrenheit = (this.temperature.max_temperature * 9 / 5) + 32;
  }
  convertMinTemp() {
    this.temperature.min_temp_celcius = this.temperature.min_temperature;
    this.temperature.min_temp_fahrenheit = (this.temperature.min_temperature * 9 / 5) + 32;
  }

  convertFeelsLikeTemp(){
    this.temperature.feels_like_celcius = this.temperature.feels_like
    this.temperature.feels_like_fahrenheit = Math.round((this.temperature.feels_like * 9 / 5) + 32);
  }

  
  changeUnit() {
    this.temperature.isCelcius = this.userPreferences.isCelcius;
    if (this.temperature.isCelcius) {
      this.temperature.current_temperature = this.temperature.temp_celcius;
      this.temperature.max_temperature = this.temperature.max_temp_celcius;
      this.temperature.min_temperature = this.temperature.min_temp_celcius;
      this.temperature.feels_like = this.temperature.feels_like_celcius;
      return
    }
    if (!this.temperature.isCelcius) {
      this.temperature.current_temperature = this.temperature.temp_fahrenheit;
      this.temperature.max_temperature = this.temperature.max_temp_fahrenheit;
      this.temperature.min_temperature = this.temperature.min_temp_fahrenheit;
      this.temperature.feels_like = this.temperature.feels_like_fahrenheit;

    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Temperature } from 'src/app/classes/temperature/temperature';
import { LocationService } from 'src/app/services/location/location.service';
import { UserPreferencesService } from 'src/app/services/UserPreferences/user-preferences.service';
import { WeatherService } from 'src/app/services/weather/weather.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  latitude: number = 0;
  longitude: number = 0;
  temperature : Temperature = new Temperature()

  constructor(
    private weatherService: WeatherService,
    private userPreferences: UserPreferencesService,
    private locationService : LocationService
  ) { }

  ngOnInit(): void {
    this.getUserLocation()

  }
  ngAfterViewInit() {
    this.userPreferences.adjustMenuBar()
  }

  getUserLocation() {
    // get Users current position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.getCurrentWeather()
        console.log("position", position)
      });
    } else {
      console.log("User not allowed")
    }

  }

  getCurrentWeather() {
    this.weatherService.getWeatherForCurrentLocation(this.latitude, this.longitude).subscribe(
      (data) => {
        this.data = data;
        this.temperature.current_temperature = this.data.main.temp;
        this.temperature.min_temperature = this.data.main.temp_min;
        this.temperature.max_temperature = this.data.main.temp_max ;
        this.temperature.description = this.data.weather[0].description;
        this.temperature.icon = this.data.weather[0].icon;
        this.temperature.feels_like = this.data.main.feels_like;
        this.temperature.humidity = this.data.main.humidity;
        this.temperature.wind = this.data.wind.speed * 3.6;
        this.temperature.pressure = this.data.main.pressure;
        this.convertMainTemp();
        this.convertMaxTemp();
        this.convertMinTemp();
        this.convertFeelsLikeTemp();
        console.log(this.data);
      })

  }

  convertMainTemp() {
    this.temperature.temp_celcius = this.temperature.current_temperature;
    this.temperature.temp_fahrenheit = Math.round((this.temperature.current_temperature * 9 / 5) + 32);
  }

  convertMaxTemp() {
    this.temperature.max_temp_celcius = this.temperature.max_temperature;
    this.temperature.max_temp_fahrenheit = Math.round((this.temperature.max_temperature * 9 / 5) + 32);
  }
  convertMinTemp() {
    this.temperature.min_temp_celcius = this.temperature.min_temperature;
    this.temperature.min_temp_fahrenheit = Math.round((this.temperature.min_temperature * 9 / 5) + 32);
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

import { Component, OnInit } from '@angular/core';
import { UserPreferencesService } from 'src/app/services/UserPreferences/user-preferences.service';
import { WeatherService } from 'src/app/services/weather/weather.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  lat:any;
 lng:any;
 zoom:any;
 isCelcius = true;
 current_temperature:number=0;
 min_temperature:number=0
 max_temperature:number=0
  temp_celcius: number = 0;
  temp_fahrenheit: number = 0;
  max_temp_celcius:number=0;
  max_temp_fahrenheit:number=0;
  min_temp_celcius:number=0;
  min_temp_fahrenheit:number=0;

  constructor(
    private weatherService : WeatherService,
    private userPreferences : UserPreferencesService
  ) { }

  ngOnInit(): void {
    this.getUserLocation()
   
  }
  ngAfterViewInit(){
    this.userPreferences.adjustMenuBar()
   }
  getUserLocation() {
    // get Users current position
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 16;
        this.getCurrentWeather()
        console.log("position", position)
      });
    }else{
      console.log("User not allowed")
    }
    
  }

  getCurrentWeather(){
    console.log(this.lat)
    this.weatherService.getWeatherForCurrentLocation(this.lat,this.lng).subscribe(
      (data)=>{
      this.data = data
      this.current_temperature =  Math.round(this.data.main.feels_like - 273.15)
      this.min_temperature =  Math.round(this.data.main.temp_min  - 273.15)
      this.max_temperature =  Math.round(this.data.main.temp_max  - 273.15)
      this.convertCurrentTemp()
      this.convertMaxTemp()
      this.convertMinTemp()
      console.log(this.data)
      })
      
  }

   convertCurrentTemp(){
     this.temp_celcius = this.current_temperature 
     this.temp_fahrenheit = (this.current_temperature * 9/5) + 32 
     console.log(this.temp_celcius)
     console.log(this.temp_fahrenheit)
   }

   convertMaxTemp(){
     this.max_temp_celcius = this.max_temperature
     this.max_temp_fahrenheit =  (this.max_temperature * 9/5) + 32 
   }
   convertMinTemp(){
    this.min_temp_celcius = this.min_temperature
    this.min_temp_fahrenheit =  (this.min_temperature * 9/5) + 32 
  }

  changeUnit(){
    this.isCelcius = this.userPreferences.isCelcius
    if(!this.isCelcius){
      this.current_temperature = this.temp_celcius
      this.max_temperature =  this.max_temp_celcius
      this.min_temperature =  this.min_temp_celcius
      return
    }
    if(this.isCelcius){
    this.current_temperature = this.temp_fahrenheit
    this.max_temperature =  this.max_temp_fahrenheit
    this.min_temperature =  this.min_temp_fahrenheit

    }
  }

  


}

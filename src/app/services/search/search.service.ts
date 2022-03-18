import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, ObservableInput, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  data: any;

  constructor(
    private httpClient : HttpClient
  ) { }

  getWeatherByLocation(location:string){
   return this.httpClient.get("https://api.openweathermap.org/data/2.5/weather?q=" +location+ "&appid=8d65b434e0cdc0da95db65116d086dc0&units=metric")
  }
  // errorHandler(error:any){
  //   let error_message = '';
  //   if(error.error instanceof ErrorEvent){
  //     error_message = error.error.message
  //   }else{
  //     // error_message = error.error.message
  //     console.log(error_message)
  //     return  throwError(()=> new Error(error_message))
  //   }
  // }

  // getWeatherByLocation(location:string){
  //   return this.httpClient.get("https://api.openweathermap.org/data/2.5/weather?q=" +location+ "&appid=8d65b434e0cdc0da95db65116d086dc0&units=metric")
  //   .pipe
  //   (retry(3),
  //   catchError(this.errorHandler)
  //  }
  
 
 
  
}

import { Injectable } from '@angular/core';
import * as $ from 'jquery';
@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {
 isCelcius : boolean = false;

  constructor() { }
  changeSwitch():boolean{
    console.log(this.isCelcius)
    return this.isCelcius = !this.isCelcius;
  }

  adjustMenuBar(){
    if ( $( "#navbarNav" ).hasClass( "show" ) == true ){
      $( "#navbarNav" ).removeClass( "show" )
    }else {

    }
  }


}

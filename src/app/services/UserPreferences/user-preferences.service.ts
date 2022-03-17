import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import { SearchService } from '../search/search.service';
@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {
 isCelcius : boolean = true;
  
  constructor(
  ) { }
  
  hasChangedToCelcius():boolean{
    return this.isCelcius = !this.isCelcius;
  }

  adjustMenuBar(){
    if ( $( "#navbarNav" ).hasClass( "show" ) == true ){
      $( "#navbarNav" ).removeClass( "show" )
    }else {

    }
  }
  



}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Temperature } from 'src/app/classes/temperature/temperature';
import { UserPreferencesService } from 'src/app/services/UserPreferences/user-preferences.service';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
@Input() temp : number = 0
temperature: Temperature = new Temperature
constructor(
    private userPreferences : UserPreferencesService
  ) { }

  ngOnInit(): void {
  }

  changeSwitch(){
     this.temperature.isCelcius =  this.userPreferences.hasChangedToCelcius()
     console.log(this.temperature.isCelcius )
  }
  



}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserPreferencesService } from 'src/app/services/UserPreferences/user-preferences.service';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
@Input() temp : number = 0
@Output() emitter = new EventEmitter
@Input() isCelcius :boolean = false;
  constructor(
    private userPreferences : UserPreferencesService
  ) { }

  ngOnInit(): void {
    console.log(this.isCelcius)
  }

  changeSwitch(){
     this.isCelcius =  this.userPreferences.changeSwitch()
     console.log(this.isCelcius)
  }

  // changeUnit(mySwitch:any){
  //   mySwitch = this.isSwitchedOn
  //    this.emitter.emit(mySwitch)
  // }

}

import { Component, OnInit } from '@angular/core';
import { UserPreferencesService } from 'src/app/services/UserPreferences/user-preferences.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private userPreferences : UserPreferencesService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.userPreferences.adjustMenuBar()
  }

}

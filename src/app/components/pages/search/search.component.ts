import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
location:string = ""
data: any;
  constructor(
    private searchService:SearchService
  ) { }

  ngOnInit(): void {
  }

  getWeatherByLocation(){
    console.log(this.location)
    const location = this.location
    this.searchService.getWeatherByLocation(this.location).subscribe(
      (data)=>{
        this.data = data;
        console.log(data)
      }
    )
  }

}

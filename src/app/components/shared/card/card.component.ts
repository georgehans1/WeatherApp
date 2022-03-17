import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() day : string = ""
@Input() description : string = ""
@Input() temperature : number = 0
@Input() max_temp : number = 0
@Input() min_temp : number = 0
@Input()icon : string = "" 
image : string = "http://openweathermap.org/img/wn/"
  constructor() { }

  ngOnInit(): void {
  }


}

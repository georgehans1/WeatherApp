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

//   getMyStyles() {
//     if(this.description == 'sunny'){

//     }
//     let myStyles = {
//        'color': this.colorFlag ? 'black' : 'yellow',
//        'font-size.em': this.isSmall ? this.small/5 : this.big/5,
//        'background-image': !this.isBackgroundRed ? 'url(\'/assets/images/red.gif\')' : 'url(\'/assets/images/green.gif\')'
//     };
//     return myStyles;
// } 

}

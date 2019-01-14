import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rem-cards',
  templateUrl: './rem-cards.component.html',
  styleUrls: ['./rem-cards.component.css']
})
export class RemCardsComponent implements OnInit {


  flipped = false;
 
  constructor() { }

  ngOnInit() {
  }
  flipIt() {
    this.flipped = !this.flipped;
  }


}

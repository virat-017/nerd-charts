import { Component, OnInit } from '@angular/core';
import { CardDataService } from 'src/app/services/card-data/card-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cardArray!:any;
  cardTitle!:String;
  cardContent!:String;
  constructor(private cardData:CardDataService) { 
    
  }

  ngOnInit(): void {
    this.cardArray=this.cardData.locationDataContent();
    this.cardTitle=this.cardArray[0].title;
    this.cardContent=this.cardArray[0].content;
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  constructor() { }



  locationDataContent(){
    return [{title:"Age Group Analytics",content:`Age group analytics page helps identify awareness across
     region and locality. Based on age group analytics, you can identify regions requiring quicker interventions across cities.`}]
  }
}

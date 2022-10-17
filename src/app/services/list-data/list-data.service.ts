import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListDataService {

  constructor() { }

  articles=[{"heading":`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Pellentesque ultricies urna vitae maximus auctor.
   Suspendisse imperdiet augue purus, rhoncus viverra est pharetra sed. 
   Sed et efficitur risus, quis maximus purus.`},
   {"heading":`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
   Pellentesque ultricies urna vitae maximus auctor.
    Suspendisse imperdiet augue purus, rhoncus viverra est pharetra sed. 
    Sed et efficitur risus, quis maximus purus.`},
    {"heading":`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Pellentesque ultricies urna vitae maximus auctor.
     Suspendisse imperdiet augue purus, rhoncus viverra est pharetra sed. 
     Sed et efficitur risus, quis maximus purus.`},
     
];

  getListData(){
    return this.articles;
  }

}

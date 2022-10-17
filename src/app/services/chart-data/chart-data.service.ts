import { Injectable } from '@angular/core';
import { Observable, Subject,BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Chart,registerables } from 'chart.js';
Chart.register(...registerables);

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor(private http:HttpClient) {

   }

  ageChartData = {
    dataSet1 : [10,400,30,60,80,90,100,500],
    dataSet2: [100,40,70,450,80,290,200,500],
  };


  ngOnInit(): void {
  
  }

/*   getDatasets():Observable<ChartDataType[]>{
    return this.http.get<ChartDataType[]>("https://randomuser.me/api/?results=10");
} */

/* observable=new Observable((observer:any)=>{
    observer.next(this.ageChartData)
}); */



/* observable=new Subject<any>();
setObservable(value:any){
  this.observable.next(value);
  console.log("called")
} */

subject=new BehaviorSubject<object>(this.ageChartData);

}

import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { ChartDataService } from 'src/app/services/chart-data/chart-data.service';
Chart.register(...registerables);
import { Subject } from 'rxjs';


@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {


  title="chartdata";
  barChart:any=[];
  dataset1:any;
  dataset2:any;
  lessThanOrGreaterThan = 'lessThan'; //selecting the options
  from = '0';
  toMonth = '7';
  exactMonth=0;
  levelsArr = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug'];
  filterLimit = 100; 
  selectCity="";
  selectAge="";
  selectState="";
  months = [{month: 'Jan', value: '0'},
  {month: 'Feb', value: '1'},
  {month: 'Mar', value: '2'},
  {month: 'Apr', value: '3'},
  {month: 'May', value: '4'},
  {month: 'Jun', value: '5'},
  {month: 'Jul', value: '6'},
  {month: 'Aug', value: '7'}];

  

/*    ageChartData = {
    "dataSet1" : Array.from({ length: 8 }, () => Math.floor(Math.random() * 590) + 10),
    "dataSet2" : Array.from({ length: 8 }, () => Math.floor(Math.random() * 590) + 10)
  };  */



  constructor(private chartDataService:ChartDataService ) { }

  ngOnInit(): void {

    this.chartDataService.subject.subscribe({next:(data:any)=>{
      console.log(data);
      this.dataset1=data.dataSet1;
      this.dataset2=data.dataSet2;
    }})
    
    this.barChart= new Chart("ageBar", {
      type: 'bar',
      options: {
        responsive: true,
        scales:{
          y:{
            beginAtZero:true
          }
        }
      },
      data: {
          labels: ['Jan','Feb','Mar','Apr','Jun','July','Aug','Sep'],
          datasets: [{
              type:'bar',
              label: 'First Dataset',
              //data: this.chartData.dataSet1,
              data: this.dataset1,
              backgroundColor: 'red',
              borderColor: 'red',
              borderWidth: 1
          },
          {
            type:'bar',
            label: 'Second Dataset',
            //data: this.chartData.dataSet2,
            data: this.dataset2,
            backgroundColor: 'blue',
            borderColor: 'blue',
            borderWidth: 1
        },
        ]
      },
  });

  
  //this.chartDataService.subject.next(this.ageChartData)



  }



  applyFilter(value:any){ 
    this.barChart.data.datasets[0].data = this.dataset1;
    this.barChart.data.datasets[1].data = this.dataset2;
    this.barChart.data.datasets.forEach((item:any,i:any) => {
      if(this.lessThanOrGreaterThan === 'greaterThan'){
        this.barChart.data.datasets[i].data = item.data.map((v: number) => {
          if(v >= value) return v
          else return 0;
        });
      }else{
        this.barChart.data.datasets[i].data = item.data.map((v: number) => {
          if(v <= value) return v;
          else return 0;
        });

      }
    });
    this.barChart.update();
  }

  applyDateFilter(){
    this.barChart.data.labels = this.levelsArr.slice(parseInt(this.from), parseInt(this.toMonth) + 1);
    this.barChart.update();  
  }
}

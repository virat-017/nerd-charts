import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { ListDataService } from 'src/app/services/list-data/list-data.service';

@Component({
  selector: 'app-sidelist-bar',
  templateUrl: './sidelist-bar.component.html',
  styleUrls: ['./sidelist-bar.component.css']
})
export class SidelistBarComponent implements OnInit {

  constructor(private listDataService:ListDataService) { }

  articles:any;

  ngOnInit(): void {

      this.articles=this.listDataService.getListData();
  }


}

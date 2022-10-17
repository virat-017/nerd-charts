import { Component, OnInit,Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() inputSideNav!:MatSidenav

  constructor() { }

  ngOnInit(): void {
    console.log(this.inputSideNav)
  }

}

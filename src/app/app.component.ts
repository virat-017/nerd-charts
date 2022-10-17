import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'charts';
  events: string[] = [];
  opened!: boolean;
  isLoggedIn:boolean=true;

}

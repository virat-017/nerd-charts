import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { LocationComponent } from './views/location/location.component';
import { AgeComponent } from './views/age/age.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import { SpecialNeedsComponent } from './views/special-needs/special-needs.component';
import { RegionalClusterComponent } from './views/regional-cluster/regional-cluster.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './components/list/list.component';
import { SidelistBarComponent } from './components/sidelist-bar/sidelist-bar.component';


@NgModule({
  declarations: [
  AppComponent,
  CardComponent,
  SidenavComponent,
  LocationComponent,
  RegionalClusterComponent,
  SpecialNeedsComponent,
  SidelistBarComponent,
  ListComponent,
  ToolbarComponent,
  AgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTabsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

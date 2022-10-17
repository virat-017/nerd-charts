import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LocationComponent } from './views/location/location.component';
import { AgeComponent } from './views/age/age.component';
import { RegionalClusterComponent } from './views/regional-cluster/regional-cluster.component';
import { SpecialNeedsComponent } from './views/special-needs/special-needs.component';

const routes: Routes = [
  {path:'',component:LocationComponent},
  {path:'location',component:LocationComponent},
  {path:'age',component:AgeComponent},
  {path:'special-needs',component:SpecialNeedsComponent},
  {path:'regional-cluster',component:RegionalClusterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

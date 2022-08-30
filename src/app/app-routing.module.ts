import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { OrganiserComponent } from './organiser/organiser.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'maps', component: MapsComponent },
  { path: 'organiser', component: OrganiserComponent },
  { path: '**', component: HomeComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

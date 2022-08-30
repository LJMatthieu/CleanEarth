import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopContentComponent } from './top-content/top-content.component';
import { ChangementComponent } from './changement/changement.component';
import { MapsComponent } from './maps/maps.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ServerService } from './server.service';
import { OrganiserComponent } from './organiser/organiser.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopContentComponent,
    ChangementComponent,
    MapsComponent,
    HomeComponent,
    OrganiserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopContentComponent } from './top-content/top-content.component';
import { ChangementComponent } from './changement/changement.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopContentComponent,
    ChangementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPassengerDataComponent } from './view-passenger-data/view-passenger-data.component';
import { UsPublicDataComponent } from './us-public-data/us-public-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewPassengerDataComponent,
    UsPublicDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

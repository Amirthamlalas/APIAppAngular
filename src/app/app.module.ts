import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPassengerDataComponent } from './view-passenger-data/view-passenger-data.component';
import { UsPublicDataComponent } from './us-public-data/us-public-data.component';
import { PublicAPILinksComponent } from './public-apilinks/public-apilinks.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';
import { ToDoComponent } from './to-do/to-do.component';

const myroute:Routes=[
  {
    path:"",
    component:ViewPassengerDataComponent
  },
  {
    path:"userinfo",
    component:UserInfoComponent
  },
  {
    path:"usdata",
    component:UsPublicDataComponent
  },
  {
    path:"apilink",
    component:PublicAPILinksComponent
  },
  {
    path:"productlist",
    component:ProductListComponent
  },
  {
    path:"userdata",
    component:UserDataComponent
  },
  {
    path:"todo",
    component:ToDoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewPassengerDataComponent,
    UsPublicDataComponent,
    PublicAPILinksComponent,
    UserInfoComponent,
    ProductListComponent,
    NavbarComponent,
    UserDataComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

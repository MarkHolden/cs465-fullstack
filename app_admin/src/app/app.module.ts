import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { TripService } from './services/trip.service';
import { AddTripComponent } from './add-trip/add-trip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-router.module';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthenticationService } from './services/authentication.service';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TripListingComponent,
    TripCardComponent,
    AddTripComponent,
    EditTripComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    AuthenticationService,
    TripService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

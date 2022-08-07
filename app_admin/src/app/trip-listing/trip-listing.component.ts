import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from '../services/trip.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripService]
})
export class TripListingComponent implements OnInit {

  trips: Trip[] = [];
  message: string = '';

  constructor(private service: TripService, private router: Router) { }

  private getTrips(): void {
    this.message = 'Searching for trips';
    this.service
      .getTrips()
      .then(foundTrips => {
        this.message = foundTrips.length > 0 ? ''
          : 'No trips found';
        this.trips = foundTrips;
      });
  }

  addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  ngOnInit(): void {
    this.getTrips();
  }

  handleDeleteTrip(code: any): void {
    this.service.deleteTrip(code)
    .then(() => {
      const index = this.trips.findIndex((trip) => {
        return trip.code === code;
      });

      if (index !== -1) {
        this.trips.splice(index, 1);
      }
    });
  }
}

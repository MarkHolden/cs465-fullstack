import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Trip } from '../models/trip'
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private options: any = null;

  constructor(private client: HttpClient,
    private authenticationService: AuthenticationService) {
      this.options = {
        headers: new HttpHeaders({'Authorization':`Bearer ${this.authenticationService.getToken()}`}),
      };
    }

  private tripsUrl = 'http://localhost:3000/api/trips';

  public getTrips(): Promise<Trip[]> {
    return this.client.get(this.tripsUrl)
    .toPromise()
    .then((response: any) => response as Trip[])
    .catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<any> {
    return this.client.get(`${this.tripsUrl}/${tripCode}`)
    .toPromise()
    .then((response: any) => response as Trip)
    .catch(this.handleError);
  }

  public addTrip(trip: Trip): Promise<Trip> {
    return this.client.post(this.tripsUrl, trip, this.options)
    .toPromise()
    .then((response: any) => response as Trip)
    .catch(this.handleError);
  }
  
  public deleteTrip(tripCode: string): Promise<any> {
    return this.client.delete(`${this.tripsUrl}/${tripCode}`, this.options)
    .toPromise()
    .catch(this.handleError);
  }
  
  public updateTrip(trip: Trip): Promise<Trip> {
    return this.client.put(`${this.tripsUrl}/${trip.code}`, trip, this.options)
    .toPromise()
    .then((response: any) => response as Trip)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something went wrong', error);
    return Promise.reject(error.message || error);
  }
}

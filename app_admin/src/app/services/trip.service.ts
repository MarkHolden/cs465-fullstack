import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Trip } from '../models/trip'

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private client: HttpClient) { }

  private baseUrl = 'http://localhost:3000/api';

  public getTrips(): Promise<Trip[]> {
    return this.client.get(`${this.baseUrl}/trips`)
    .toPromise()
    .then((response: any) => response as Trip[])
    .catch(this.handleError);
  }

  public addTrip(trip: Trip): Promise<Trip> {
    return this.client.post(`${this.baseUrl}/trips`, trip)
    .toPromise()
    .then((response: any) => response as Trip)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something went wrong', error);
    return Promise.reject(error.message || error);
  }
}

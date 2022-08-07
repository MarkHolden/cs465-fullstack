import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Trip } from '../models/trip'

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private client: HttpClient) { }

  private baseUrl = 'http://localhost:3000/api';

  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return this.client.get(`${this.baseUrl}/trips`)
    .toPromise()
    .then((response: any) => response.json() as Trip[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something went wrong', error);
    return Promise.reject(error.message || error);
  }
}

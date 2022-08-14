import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

  @Output('deletedEvent') deletedEvent: EventEmitter<string> = new EventEmitter();
  @Input('trip') trip: any;
  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void { }

  editTrip(): void {
    this.router.navigate([`trips/${this.trip.code}/edit`]);
  }

  deleteTrip(): void {
    if(confirm(`Are you sure you want to delete ${this.trip.name}`)) {
      this.deletedEvent.emit(this.trip.code);
    }
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
}

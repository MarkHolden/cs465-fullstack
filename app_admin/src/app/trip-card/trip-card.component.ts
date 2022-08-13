import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

  @Output('deletedEvent') deletedEvent: EventEmitter<string> = new EventEmitter();
  @Input('trip') trip: any;
  constructor(private router: Router) { }

  ngOnInit(): void { }

  editTrip(): void {
    this.router.navigate([`edit-trip/${this.trip.code}`]);
  }

  deleteTrip(): void {
    if(confirm(`Are you sure you want to delete ${this.trip.name}`)) {
      this.deletedEvent.emit(this.trip.code);
    }
  }
}

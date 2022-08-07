import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

  @Output('deletedEvent') deletedEvent: EventEmitter<string> = new EventEmitter();
  @Input('trip') trip: any;
  constructor() { }

  ngOnInit(): void { }

  deleteTrip(): void {
    if(confirm(`Are you sure you want to delete ${this.trip.name}`)) {
      this.deletedEvent.emit(this.trip.code);
    }
  }
}

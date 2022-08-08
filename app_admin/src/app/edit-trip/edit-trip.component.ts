import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {
  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private tripService: TripService,
  ) {
    this.editForm = this.formBuilder.group({
      _id: [''],
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: [Date, Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const tripCode = this.route.snapshot.paramMap.get('id');
    if (!tripCode) {
      alert("Something went wrong. Check the path.");
      this.router.navigate(['']);
      return;
    }

    this.editForm = this.formBuilder.group({
      _id: [''],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: [Date, Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.tripService.getTrip(tripCode)
      .then(t => {
        this.editForm.patchValue(t)
        this.editForm.get('start')?.patchValue(this.formatDate(t.start));
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.editForm?.valid) {
      this.tripService.updateTrip(this.editForm?.value)
        .then((data: any) => {
          this.router.navigate(['']);
        });
    }
  }

  get f() { return this.editForm?.controls; }

  private formatDate(date: string) {
    let newDate = new Date(date);
    return newDate.toJSON().split('T')[0];
  }
}

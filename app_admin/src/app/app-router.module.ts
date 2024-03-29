import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddTripComponent } from "./add-trip/add-trip.component";
import { EditTripComponent } from "./edit-trip/edit-trip.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { TripListingComponent } from "./trip-listing/trip-listing.component";

const routes: Routes = [
    { path: 'trips/add', component: AddTripComponent },
    { path: 'trips/:id/edit', component: EditTripComponent },
    { path: 'trips', component: TripListingComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

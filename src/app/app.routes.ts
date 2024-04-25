import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PopularFlightsComponent } from './popular-flights/popular-flights.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { FlightsComponent } from './flights/flights.component';
import path from 'path';
import { ReviewBookingComponent } from './review-booking/review-booking.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

export const routes: Routes = [
    {path:'' , title: 'Home' , component: HomeComponent},
    {path:'login' , title: 'Login' , component: LoginComponent},
    {path:'signup' , title: 'Sign Up' , component:SignUpComponent},
    {path:'popularFlights' , title: 'Popular Flights' , component:PopularFlightsComponent},
    {path:'customerSupport' , title: 'Customer Support' , component: CustomerSupportComponent},
    {path:'flights' , component: FlightsComponent},
    {path:'review-booking' , title:'Review Booking' , component:ReviewBookingComponent},
    {path:'thank-you' , component: ThankYouComponent}
];

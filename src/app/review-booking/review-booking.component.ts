import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-booking',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './review-booking.component.html',
  styleUrl: './review-booking.component.css'
})
export class ReviewBookingComponent {
  flight = {
    airline: 'Indigo',
    origin: 'New York',
    destination: 'Los Angeles',
    departureTime: '2023-03-15T12:00:00',
    arrivalTime: '2023-03-15T16:00:00',
    duration: '4h',
    price: '$200'
  };
  passengerName = '';
  passengerEmail = '';

  constructor(private router: Router) {}

  confirmBooking() {
    // Redirect to the thank you page with passenger details
    this.router.navigate(['/thank-you'], {
      state: {
        passengerName: this.passengerName,
        passengerEmail: this.passengerEmail
      }
    });
  }
}
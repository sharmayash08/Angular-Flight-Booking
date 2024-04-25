import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import path from 'path';

@Component({
  standalone:true,
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
  imports:[RouterLink , CommonModule]
})
export class FlightsComponent {
  flights: any[] = [
    { airline: 'IndiGo', origin: 'BLR Bengaluru, India', destination: 'DEL New Delhi, India', departureTime: '13:00', duration: '3h 00m', price: '₹7,206' },
    { airline: 'Air India', origin: 'MUM Mumbai, India', destination: 'GOI Goa, India', departureTime: '09:30', duration: '1h 30m', price: '₹5,500' },
    { airline: 'SpiceJet', origin: 'CCU Kolkata, India', destination: 'IXR Ranchi, India', departureTime: '14:45', duration: '1h 15m', price: '₹3,800' },
    { airline: 'Vistara', origin: 'PNQ Pune, India', destination: 'MAA Chennai, India', departureTime: '11:20', duration: '2h 30m', price: '₹6,900' }
    // Add more flight data as needed
  ];

  constructor(private router: Router) {}

  bookFlight(flight: any) {
    this.router.navigate(['/review-booking'], { state: { flight } });
  }
}

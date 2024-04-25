import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent {
  flight: any = {};
  passengerName = '';
  passengerEmail = '';

  constructor(private route: ActivatedRoute) {
    const routeData = this.route.snapshot.data;
    this.flight = routeData['flight'];
    this.passengerName = routeData['passengerName'];
    this.passengerEmail = routeData['passengerEmail'];
  }
}
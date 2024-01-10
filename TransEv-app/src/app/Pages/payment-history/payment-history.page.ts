// payment-history.page.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-history',
  templateUrl: 'payment-history.page.html',
  styleUrls: ['payment-history.page.scss'],
})
export class PaymentHistoryPage {
  paymentHistory: any[]; // Replace 'any[]' with your actual data structure

  constructor() {
    // Fetch payment history data (replace with your actual data retrieval logic)
    this.paymentHistory = [
      {
        location: 'Charging Station A',
        date: new Date('2024-01-01T08:00:00'),
        powerInput: 10,
        amount: 15.50,
      },
      {
        location: 'Charging Station B',
        date: new Date('2024-01-05T12:30:00'),
        powerInput: 8,
        amount: 12.75,
      },
      {
        location: 'Charging Station C',
        date: new Date('2024-01-10T16:45:00'),
        powerInput: 12,
        amount: 20.00,
      },
      {
        location: 'Charging Station D',
        date: new Date('2024-01-15T09:15:00'),
        powerInput: 15,
        amount: 25.75,
      },
      {
        location: 'Charging Station E',
        date: new Date('2024-01-20T14:00:00'),
        powerInput: 7,
        amount: 11.50,
      },
      {
        location: 'Charging Station F',
        date: new Date('2024-01-25T18:30:00'),
        powerInput: 11,
        amount: 18.25,
      },
      {
        location: 'Charging Station G',
        date: new Date('2024-02-01T11:45:00'),
        powerInput: 13,
        amount: 22.50,
      },
      {
        location: 'Charging Station H',
        date: new Date('2024-02-06T15:20:00'),
        powerInput: 9,
        amount: 14.75,
      },
      {
        location: 'Charging Station I',
        date: new Date('2024-02-11T10:00:00'),
        powerInput: 14,
        amount: 23.00,
      },
      {
        location: 'Charging Station J',
        date: new Date('2024-02-16T13:45:00'),
        powerInput: 16,
        amount: 27.50,
      },
      // Add more payment history entries as needed
    ];
  }
}

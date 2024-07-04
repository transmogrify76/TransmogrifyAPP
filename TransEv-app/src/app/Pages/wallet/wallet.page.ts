import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var Razorpay: any; // Declare Razorpay globally

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage {
  balance: number = 0;
  selectedAmount: number = 0; // Variable to store selected amount

  constructor(private router: Router) {}

  ionViewDidEnter() {
    // Fetch wallet balance data from API or service
    this.balance = this.fetchWalletBalance(); // Example function to fetch wallet balance
  }

  fetchWalletBalance(): number {
    // Example function to fetch wallet balance from a service or API
    return 0; // Example balance amount
  }

  addMoney(amount: number): void {
    // Implement logic to add money to the wallet
    console.log('Adding ' + amount + ' to wallet...');
    // Example: Call an API to update wallet balance
    this.balance += amount;
    this.selectedAmount = amount; // Update selected amount
  }

  payNow(): void {
    const paymentAmount = this.selectedAmount * 100; // Convert amount to paise (assuming ₹1 = 100 paise)

    const options = {
      key: 'rzp_live_kaJZ4jkMErixqW', // Replace with your Razorpay test key
      amount: paymentAmount,
      currency: 'INR',
      name: 'Transmogrify Global Pvt Ltd',
      description: 'Payment for transev Wallet Recharge',
      image: 'https://cdn.statically.io/img/transmogriffy.com/wp-content/uploads/2022/03/TWLD5456.jpg?w=1280&quality=100&f=auto',
      handler: (response: any) => {
        alert('Payment successful. Payment ID: ' + response.razorpay_payment_id);
        // Add logic to handle payment success (e.g., update wallet balance, show success message)
        this.balance += this.selectedAmount; // Update wallet balance after successful payment
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999'
      },
      notes: {
        address: 'Customer Address'
      },
      theme: {
        color: '#F37254'
      }
    };

    const rzp = new Razorpay(options);
    rzp.open();
  }
}

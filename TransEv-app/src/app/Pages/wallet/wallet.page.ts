import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage {
  balance: number = 1000; // Replace with actual logic to fetch wallet balance

  constructor() {
    // Implement logic to fetch wallet information from your backend or storage
  }
}

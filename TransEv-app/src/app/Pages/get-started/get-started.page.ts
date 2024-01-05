// get-started.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChargingStationService } from '../../charging-station.service';
import { ChargingStation } from '../../charging-station.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-get-started',
  templateUrl: 'get-started.page.html',
  styleUrls: ['get-started.page.scss'],
})
export class GetStartedPage {
  location: string = '';
  chargingStations: ChargingStation[] = [];

  constructor(private router: Router, private chargingStationService: ChargingStationService) {}
  signOut() {
    // Perform any necessary sign-out logic
    // Navigate to the login page
    this.navigateToPage('/login');
  }
  accountDetails(){
    this.navigateToPage('/account-details');
  }
  scanQRCode(){
    this.navigateToPage('/scan-qr');
  }
  searchChargingStation() {
    this.chargingStationService.getChargingStations(this.location)
      .pipe(
        take(1) // Use take(1) to automatically unsubscribe after the first emission
      )
      .subscribe({
        next: (chargingStations) => {
          if (chargingStations && chargingStations.length > 0) {
            this.router.navigate(['/charging-stations'], { state: { chargingStations } });
          } else {
            console.log('No charging stations found in the provided location.');
          }
        },
        error: (error) => {
          console.error('Error fetching charging stations', error);
        }
      });
  }
  // Define navigateToPage method to handle navigation
  navigateToPage(route: string) {
    this.router.navigate([route]);
  }
}

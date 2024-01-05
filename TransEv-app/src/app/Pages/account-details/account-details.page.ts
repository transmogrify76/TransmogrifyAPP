// account-details.page.ts

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-account-details',
  templateUrl: 'account-details.page.html',
  styleUrls: ['account-details.page.scss'],
})
export class AccountDetailsPage {
  dummyUser = {
    name: 'Chitradeep Ghosh',
    email: 'ghoshchitradeep76@gmail.com',
    profilePicture: 'path_to_default_image', // Add a default profile picture path or URL
    // Add more dummy user information fields as needed
  };

  constructor(private navCtrl: NavController) {}

  signOut() {
    // Perform sign-out logic (replace with your actual sign-out logic)
    // For this example, let's navigate to the login page
    this.navCtrl.navigateRoot('/login');
  }

  uploadProfilePicture() {
    // Add logic for profile picture upload
    // This function will be called when the "Upload" button is clicked
    console.log('Upload profile picture logic goes here');
  }
}

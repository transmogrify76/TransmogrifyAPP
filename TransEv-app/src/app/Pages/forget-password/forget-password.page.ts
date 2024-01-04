import { Component } from '@angular/core';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage {
  email: string ='';

  

  async sendResetEmail() {
    try {
     
      console.log('Password reset email sent successfully.');
      // You can redirect the user to a confirmation page or show a success message.
    } catch (error) {
      console.error('Error sending password reset email:', error);
      // Handle errors (e.g., display an error message to the user).
    }
  }
}

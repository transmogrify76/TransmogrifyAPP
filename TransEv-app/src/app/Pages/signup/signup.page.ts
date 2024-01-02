import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  fullName: string = ''; 
  email: string = '';
  password: string  = '';

  constructor() {}

  signup() {
    // Implement your signup logic here
    console.log('Signup clicked');
    // You can add your user registration logic here
  }
}

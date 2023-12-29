import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = ''; // Add an initializer
  password: string = ''; // Add an initializer

  constructor() {}

  login() {
    // Implement your login logic here
    console.log('Login clicked');
    // You can add your authentication logic here
  }
}

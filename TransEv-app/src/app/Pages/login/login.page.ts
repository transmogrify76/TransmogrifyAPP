import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string ='';
  password: string ='';
  loginError: boolean = false;

  constructor(private router: Router) {}

  login() {
    // For demonstration purposes, set username and password to 'admin'
    const validUsername = 'admin';
    const validPassword = 'admin';

    if (this.username === validUsername && this.password === validPassword) {
      // Successful login, navigate to the landing page
      this.router.navigate(['/landing']);
    } else {
      // Invalid login, display error message
      this.loginError = true;
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  mode: 'login' | 'signup' = 'login';
  username = '';
  password = '';
  error = '';

  // Static admin credentials
  private adminUsername = 'admin';
  private adminPassword = 'admin123';

  signupUsername = '';
  signupEmail = '';
  signupPassword = '';
  signupConfirm = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === this.adminUsername && this.password === this.adminPassword) {
      this.error = '';
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Invalid username or password.';
    }
  }

  signup() {
    // For now, just redirect to dashboard after 'signup'
    this.router.navigate(['/dashboard']);
  }
} 
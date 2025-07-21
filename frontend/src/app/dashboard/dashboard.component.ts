import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [RouterModule, CommonModule]
})
export class DashboardComponent {
  constructor(private router: Router) {}

  logout() {
    // Clear auth state (for now, just redirect)
    this.router.navigate(['/']);
  }
} 
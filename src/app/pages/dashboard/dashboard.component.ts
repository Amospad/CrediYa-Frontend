import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  irASolicitudes() {
    this.router.navigate(['/pages/solicitudes']);
  }

  irAReportes() {
    this.router.navigate(['/pages/reportes']);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/pages/login']);
  }
}
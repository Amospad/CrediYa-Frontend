import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  correoElectronico: string = '';
  password: string = '';
  error: string = '';
  loading: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.loading = true;
    this.error = '';
    
    this.http.post<any>('http://localhost:8085/api/v1/login', { 
      correoElectronico: this.correoElectronico, 
      password: this.password 
    }).subscribe({
      next: (res) => {
        this.loading = false;
        localStorage.setItem('token', res.token);
        this.router.navigate(['/pages/dashboard']);
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Credenciales incorrectas';
      }
    });
  }
}
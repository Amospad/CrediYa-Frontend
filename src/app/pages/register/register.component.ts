import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  nombres: string = '';
  apellidos: string = '';
  correoElectronico: string = '';
  password: string = '';
  salarioBase: number = 0;
  error: string = '';
  success: string = '';
  loading: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.loading = true;
    this.error = '';
    this.success = '';
    
    const payload = {
      nombres: this.nombres,
      apellidos: this.apellidos,
      correoElectronico: this.correoElectronico,
      password: this.password,
      salarioBase: this.salarioBase,
      rol: 'CLIENTE'
    };
    
    this.http.post('http://localhost:8085/api/v1/usuarios', payload).subscribe({
      next: (res) => {
        this.loading = false;
        this.success = 'Usuario registrado exitosamente. Redirigiendo al login...';
        setTimeout(() => this.router.navigate(['/pages/login']), 2000);
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error.error || 'Error al registrar usuario';
      }
    });
  }
}
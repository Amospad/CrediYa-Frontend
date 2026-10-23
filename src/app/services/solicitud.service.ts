import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private apiUrl = 'http://localhost:8081/api/v1/solicitud';

  constructor(private http: HttpClient) {}

  listarSolicitudes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearSolicitud(solicitud: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, solicitud);
  }

  cambiarEstado(id: number, estado: string): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/' + id, { estado });
  }
}
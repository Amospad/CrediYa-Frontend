import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserData {
  getUsers(): Observable<any[]> {
    return of([{ name: 'Admin CrediYa', role: 'ADMIN' }]);
  }
  
  getCurrentUser(): Observable<any> {
    return of({ name: 'Admin CrediYa', role: 'ADMIN' });
  }
}
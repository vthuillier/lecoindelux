import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor() {
  }

  isAuthenticated(token: string): boolean {
    return true;
  }

  authenticate(username: string, password: string): boolean {
    localStorage.setItem('token', 'toto');
    return true;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private readonly userService: UserService, private readonly router: Router) {
  }

  ngOnInit(): void {
    const token = !!localStorage.getItem('token');
    console.log('Token:', token);
    console.log('User service:', this.userService.isAuthenticated(localStorage.getItem('token')!));
    if (!token || !this.userService.isAuthenticated(localStorage.getItem('token')!)) {
      this.router.navigate(['/admin/dashboard']).then(r => r);
    }
  }

  onSubmit(): void {
    if (this.username && this.password) {
      console.log('Connexion en cours...');

      if (this.userService.authenticate(this.username, this.password)) {
        console.log('Connexion réussie.');
        this.router.navigate(['/admin/dashboard'], { replaceUrl: true });
      }

    } else {
      console.error('Les champs ne peuvent pas être vides.');
    }
  }
}

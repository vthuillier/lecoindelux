import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  age: string;
  job: string;
  articles: any;
  
  constructor() {
    
    const myBirthday = new Date('2004-07-30');
    const today = new Date();
    const diff = today.getTime() - myBirthday.getTime();
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    this.age = age.toString();
    this.job = 'alternant développeur chez Extern SN';
  }

}

import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  age: string;
  job: string;
  articles: any;

  constructor(private readonly titleService: Title, private readonly metaService: Meta) {
    const myBirthday = new Date('2004-07-30');
    const today = new Date();
    const diff = today.getTime() - myBirthday.getTime();
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    this.age = age.toString();
    this.job = 'alternant développeur chez Extern SN';
  }

  ngOnInit() {
    this.titleService.setTitle('Page d\'accueil - Le coin de Lux');
    this.metaService.updateTag({
      name: 'description',
      content: 'Le blog de Valentin THUILLIER, développeur et sapeur-pompier.',
    });
    this.metaService.updateTag({ name: 'keywords', content: 'informatique, sapeur-pompier, blog, développement' });
    this.metaService.updateTag({ name: 'author', content: 'Valentin THUILLIER' });
  }

}

import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';

const websiteTitle = 'Le coin de Lux';

export const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, title: `${websiteTitle} - Menu principal`},

];

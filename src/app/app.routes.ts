import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { userGuard } from './user.guard';

const websiteTitle = 'Le coin de Lux';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, title: `${websiteTitle} - Menu principal`},
  {
    path: 'admin', children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: `${websiteTitle} - Tableau de bord administrateur`,
        canActivate: [userGuard],
      },
      { path: 'login', component: LoginComponent, title: `${websiteTitle} - Connexion administrateur` },
    ],
  },
];

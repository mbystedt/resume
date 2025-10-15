import { Routes } from '@angular/router';

import { Layout } from './layout/layout';
import { Contact } from './contact/contact';
import { Experience } from './experience/experience';
import { Home } from './home/home';
import { Portfolio } from './portfolio/portfolio';
import { Skills } from './skills/skills';

export const outletRoutes = [
  { path: 'home', component: Home, data: { path: '/home', label: 'Home' } },
  { path: 'skills', component: Skills, data: { path: '/skills', label: 'Skills' } },
  { path: 'portfolio', component: Portfolio, data: { path: '/portfolio', label: 'Portfolio' } },
  { path: 'experience', component: Experience, data: { path: '/experience', label: 'Experience' } },
  { path: 'contact', component: Contact, data: { path: '/contact', label: 'Contact' } },
  { path: '**', component: Home, data: { path: '/home' } }
];

export const routes: Routes = [
  {
    path: '', component: Layout, children: outletRoutes
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

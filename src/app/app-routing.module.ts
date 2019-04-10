import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';

export const appRoutes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'professional', component: SkillsComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'social', component: ContactComponent },
      { path: '**', component: HomeComponent }
    ]
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}
  
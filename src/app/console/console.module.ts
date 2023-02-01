import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { LanguageComponent } from '../components/language/language.component';
import { EnvironmentComponent } from './environment/env.component';
import { ApplicationComponent } from './application/app.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'environment', component: EnvironmentComponent },
      { path: 'application', component: ApplicationComponent },
    ],
  },
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  declarations: [
    LayoutComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ProfileComponent,
    LanguageComponent,
    EnvironmentComponent,
    ApplicationComponent,
  ],
})
export class ConsoleModule {}

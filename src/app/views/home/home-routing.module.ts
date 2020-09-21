import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { AnswerComponent } from './answer/answer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DependenciesComponent } from './dependencies/dependencies.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { PosthumousComponent } from './posthumous/posthumous.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      
      { path: 'dashboard', component:DashboardComponent},
      { path: 'profile', component:ProfileComponent},
      { path: 'dependencies', component:DependenciesComponent},
      { path: 'payment', component:PaymentComponent},
      { path: 'request', component:AnswerComponent},
      { path: 'answer', component:PosthumousComponent},
      { path: 'home', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

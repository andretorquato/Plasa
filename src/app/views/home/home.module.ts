import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { MenuComponent } from '../menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { DependenciesComponent } from './dependencies/dependencies.component';
import { PaymentComponent } from './payment/payment.component';
import { AnswerComponent } from './answer/answer.component';
import { PosthumousComponent } from './posthumous/posthumous.component';


@NgModule({
  declarations: [
    HomePage, 
    MenuComponent,
    DashboardComponent,
    ProfileComponent,
    DependenciesComponent,
    PaymentComponent,
    AnswerComponent,
    PosthumousComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
})
export class HomePageModule {}

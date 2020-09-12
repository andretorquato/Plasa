import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

import { NgxMaskModule, IConfig } from 'ngx-mask';


const maskConfig: Partial<IConfig> = {
  validation: false,
};
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}

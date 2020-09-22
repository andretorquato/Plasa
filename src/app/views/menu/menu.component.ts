import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
    
  ],
  declarations: [MenuComponent]
})

export class MenuComponent implements OnInit {

  public user = {
    name: 'André Torquato',
    photo: 'https://avatars2.githubusercontent.com/u/44441254?s=460&u=9b9fad4dfdf539853131f359812f98f65be72205&v=4'
  }
  public logo = 'https://plasa.app.gruponobre.com/images/plasateste.png';
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Início',
      url: '/home/dashboard',
      icon: 'home'
    },
    {
      title: 'Identidade',
      url: '/home/profile',
      icon: 'person'
    },
    {
      title: 'Dependentes',
      url: '/home/dependencies',
      icon: 'people'
    },
    {
      title: 'Pagamentos',
      url: '/home/payment',
      icon: 'cash'
    },
    {
      title: 'Solicitar Representante',
      url: '/home/request',
      icon: 'call'
    },
    {
      title: 'Atendimento Póstumo',
      url: '/home/answer',
      icon: 'medkit'
    },
    {
      title: 'Reportar Problema',
      url: '/home/feedback',
      icon: 'bug'
    },
    {
      title: 'Sair',
      url: '/login',
      icon: 'power'
    }
  ];



  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _router: RouterModule
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  ngOnInit() {
        const path = window.location.pathname.split('home/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
   }

}

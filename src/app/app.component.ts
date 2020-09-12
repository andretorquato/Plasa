import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Início',
      url: '/home/index',
      icon: 'home'
    },
    {
      title: 'Identidade',
      url: '/home/profile',
      icon: 'contact'
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
      icon: 'alert'
    },
    {
      title: 'Sair',
      url: '/login',
      icon: 'power'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
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

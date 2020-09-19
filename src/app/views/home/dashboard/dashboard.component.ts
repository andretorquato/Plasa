import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
  ],
  declarations: [DashboardComponent]
})
export class DashboardComponent implements OnInit {

  public logo = 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg';
  public home: string;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Minha Carteirinha',
      url: '/home/profile',
      icon: 'person-sharp'
    },
    {
      title: 'Meus Dependentes',
      url: '/home/dependencies',
      icon: 'people'
    },
    {
      title: 'Meus Pagamentos',
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
    }
  ];
  public slides = [
    {
      img: 'https://images.unsplash.com/photo-1599687267899-09999a5d92fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
      id: 1
    },
    {
      img: 'https://images.unsplash.com/photo-1599921420190-e7284ff2a7ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1440&q=80',
      id: 2
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      id: 3
    }
  ];
  

  constructor(
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.home = this.activatedRoute.snapshot.paramMap.get('id');
  }

}

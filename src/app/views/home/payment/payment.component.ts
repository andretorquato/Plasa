import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  public payments = [
    {
      id:0,
      pay: "19/02/2020",
      date: "Janeiro/2020",
      value: 78.31
    },
    {
      id:1,
      pay: "19/02/2020",
      date: "Fevereiro/2020",
      value: 78.31
    },
    {
      id:2,
      pay: "19/02/2020",
      date: "Março/2020",
      value: 78.31
    },
    {
      id:3,
      pay: "19/02/2020",
      date: "Abril/2020",
      value: 78.31
    },
    {
      id:4,
      pay: "19/02/2020",
      date: "Maio/2020",
      value: 78.31
    },
    {
      id:5,
      pay: "19/02/2020",
      date: "Junho/2020",
      value: 78.31
    },
    {
      id:6,
      pay: "19/02/2020",
      date: "Julho/2020",
      value: 78.31
    },
    {
      id:7,
      pay: "19/02/2020",
      date: "Agosto/2020",
      value: 78.31
    },
    {
      id:8,
      pay: "19/02/2020",
      date: "Setembro/2020",
      value: 78.31
    },
    {
      id:9,
      pay: "19/02/2020",
      date: "Outubro/2020",
      value: 78.31
    },
    {
      id:10,
      pay: "19/02/2020",
      date: "Novembro/2020",
      value: 78.31
    },
    {
      id:11,
      pay: "19/02/2020",
      date: "Dezembro/2020",
      value: 78.31
    },

  ];
  constructor() { }

  ngOnInit() {}

}

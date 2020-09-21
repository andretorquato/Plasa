
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dependencies',
  templateUrl: './dependencies.component.html',
  styleUrls: ['./dependencies.component.scss'],
})



export class DependenciesComponent implements OnInit {
  public dependencies = [
    {
      id:1,
      name: "João Dos Santos Medeiros Junior",
      date: "19/07/2016",
      year: 2016
    },
    {
      id:2,
      name: "Francisco Maria",
      date: "19/07/2019",
      year: 2017
    },
    {
      id:3,
      name: "Antonio Pedro João ",
      date: "19/07/2020",
      year: 2020
    },
  ];
  constructor() { }

  ngOnInit() {}

}

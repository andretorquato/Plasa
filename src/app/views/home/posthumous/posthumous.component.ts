import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posthumous',
  templateUrl: './posthumous.component.html',
  styleUrls: ['./posthumous.component.scss'],
})
export class PosthumousComponent implements OnInit {
  public whatsapp_message: string  = "https://api.whatsapp.com/send?phone=5588988565411&text=Ol%C3%A1%20Me%20chamo%20Antonio%20CPF%20xxx.xxx.xx-00%20e%20venho%20tratar%20de%20assuntos..";
  constructor() { }

  ngOnInit() {}

}

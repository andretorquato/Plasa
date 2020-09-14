import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public profile: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.profile = this.activatedRoute.snapshot.paramMap.get('id');
  }

}

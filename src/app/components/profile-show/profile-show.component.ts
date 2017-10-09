import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import{ ProfileService } from '../../services/profile.service'

@Component({
  selector: 'app-profile-show',
  templateUrl: './profile-show.component.html',
  styleUrls: ['./profile-show.component.css']
})
export class ProfileShowComponent implements OnInit {

  constructor(private profileService : ProfileService, private route: ActivatedRoute) { }
  profile: Object;
  ngOnInit() {
    this.get()
  }
  get(){
    this.route.params.subscribe((params)=>{
      this.profileService.get(params['id'])
      .subscribe((user)=>this.profile=user);      
    });

  }
}

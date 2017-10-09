import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../models/user';
import{ ProfileService } from '../../services/profile.service'

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  constructor(private profileService : ProfileService, private route: ActivatedRoute) { }
  editedProfile: Object;
  ngOnInit() {
  }
  submit(form){
    this.editedProfile = new User(form);
    this.route.params.subscribe((params)=>{
      this.profileService.edit(params['id'],this.editedProfile)
      .subscribe()
    });
  }
}

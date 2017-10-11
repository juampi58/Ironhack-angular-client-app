import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../models/user';
import{ ProfileService } from '../../services/profile.service'

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  user: User;
  dateOfBirth: string;

  constructor(
    private profileService : ProfileService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.profileService.get(params['id'])
        .subscribe((user) => {
          this.user = new User(user);
          if (user.dateOfBirth) {
            let dateSplit = user.dateOfBirth.substring(0, 10).split('-');
            this.dateOfBirth = dateSplit[0] + '-' + dateSplit[1] + '-' + dateSplit[2];
          }
        });
    });
  }
  submit(form){
    this.route.params.subscribe((params) => {
      this.user.dateOfBirth = this.dateOfBirth;
      this.profileService.edit(params['id'], this.user)
        .subscribe(() => {
          this.router.navigate(['/users', this.user._id]);
        });
    });
  }
}

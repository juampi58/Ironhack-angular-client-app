import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import{ AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {

  user: User;

  constructor(
    private authService : AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit(form){
    this.authService.signup(form.value)
      .subscribe((user) => {
        console.log(user);
        this.user = user;
        this.router.navigate(['/users', user._id]);
    });
  }

}

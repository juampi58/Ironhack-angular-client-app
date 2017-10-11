import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import{ AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {


  constructor(
    private authService : AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit(form){
    this.authService.logIn(form.value)
      .subscribe((user) => {
        console.log(user);
        console.log(user._id)
        this.router.navigate(['/users', user._id])
    });
  }
}

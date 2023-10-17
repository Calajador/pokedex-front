import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  secret: any;
  hide = true;
  loginUser = {
    email: null,
    password: null,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    console.log(this.loginUser);
    this.router.navigate(['/']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  model: any = { email: '', password: '' }

  constructor(public userService: UserService,
    public router: Router) { }

  ngOnInit(): void {
  }

  async login() {
    var response = await this.userService.Authenticate(this.model);
    if (response) {
      localStorage.setItem("token", response);
      this.router.navigate([''])
    }
  }

}

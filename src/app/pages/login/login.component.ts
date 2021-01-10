import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  model: any = { email: null, password: null }
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  async login() {
    var response = await this.userService.Authenticate(this.model);
    if (response) {
      localStorage.setItem("token", response)
      this.router.navigate(['/dasboard'])
    }
  }
}

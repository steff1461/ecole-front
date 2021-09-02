import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit(): void {
  }

  signIn(): void {

    const userForm = {
      email: 'felixmalchair@gmail.com',
      password: '1'
    }
    this.userService.login(userForm).subscribe( item =>
    {
      const user: User = item;
      console.log(user);
      this.userService.user= item;
      this.router.navigate(['profile']).then();
    }
    );
  }
}

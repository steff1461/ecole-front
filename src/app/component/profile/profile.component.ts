import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user: User = {} as User;

  constructor(public userService: UserService) {

  }

  ngOnInit(): void {

    this.user = this.userService.user;
  }

}

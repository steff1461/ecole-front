import { Component, OnInit } from '@angular/core';
import {UserCoursService} from "../../service/user-cours.service";
import {UserCours} from "../../model/usercours.model";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {

  public lessons$: BehaviorSubject<UserCours[]> = new BehaviorSubject<UserCours[]>([]);

  constructor(public userCoursService: UserCoursService) { }

  ngOnInit(): void {

    this.userCoursService.findAllByStudent(1).subscribe(item => this.lessons$.next(item));
  }

  unsubscribe(lesson: UserCours): void {

  }
}

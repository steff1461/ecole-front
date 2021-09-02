import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  route: string = 'http://localhost:8100/users/'
  public user: User = {} as User;

  constructor(public httpClient: HttpClient) {


  }

  findById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.route + id);
  }

  findAll(): Observable<User[]> {

    return this.httpClient.get<User[]>(this.route);
  }

  login(userform: any): Observable<User> {
    return this
      .httpClient
      .post<User>(this.route+ 'login', userform);
  }
}

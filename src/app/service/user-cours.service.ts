import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserCours} from "../model/usercours.model";

@Injectable({
  providedIn: 'root'
})
export class UserCoursService {

  route: string = 'http://localhost:8100/users-cours/'

  constructor(public httpClient: HttpClient) {


  }

  findById(id: number): Observable<UserCours> {
    return this.httpClient.get<UserCours>(this.route + id);
  }

  findAll(): Observable<UserCours[]> {

    return this.httpClient.get<UserCours[]>(this.route);
  }

  findAllByStudent(id: number): Observable<UserCours[]>{

    return this.httpClient.get<UserCours[]>(this.route+'/student/'+ id);
  }

  create(coursForm: any): Observable<UserCours> {

    return this.httpClient.post<UserCours>(this.route, coursForm);
  }

  delete(id: number): Observable<boolean> {

    return this.httpClient.delete<boolean>(this.route + id);
  }

}

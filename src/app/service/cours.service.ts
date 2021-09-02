import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cours} from "../model/cours.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  route: string = 'http://localhost:8100/cours/'

  constructor(public httpClient: HttpClient) {


  }

  findById(id: number): Observable<Cours> {
    return this.httpClient.get<Cours>(this.route + id);
  }

  findAll(): Observable<Cours[]> {

    return this.httpClient.get<Cours[]>(this.route);
  }

  create(coursForm: any): Observable<Cours> {

    return this.httpClient.post<Cours>(this.route, coursForm);
  }

  delete(id: number): Observable<boolean> {

    return this.httpClient.delete<boolean>(this.route + id);
  }

}

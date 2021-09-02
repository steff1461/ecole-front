import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {LoginComponent} from "./component/login/login.component";
import {ProfileComponent} from "./component/profile/profile.component";
import {CoursComponent} from "./component/cours/cours.component";


const routes: Routes = [


  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'cours',
        component: CoursComponent
      },
      {
        path: '',
        component: LoginComponent,
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbButtonModule, NbCardModule, NbInputModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { CoursComponent } from './component/cours/cours.component';
import { ProfileComponent } from './component/profile/profile.component';
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./component/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    HttpClientModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

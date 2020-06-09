import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './containers/register/register.component';
import { LoginComponent } from './containers/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './containers/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { UserinfoComponent } from './containers/userinfo/userinfo.component';
import { TimelineComponent } from './containers/timeline/timeline.component';
import { AllusersComponent } from './containers/allusers/allusers.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    UserinfoComponent,
    TimelineComponent,
    AllusersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

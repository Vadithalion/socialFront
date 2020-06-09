import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './containers/register/register.component';
import { LoginComponent } from './containers/login/login.component';
import { HomeComponent } from './containers/home/home.component';
import { AllusersComponent } from './containers/allusers/allusers.component';
import { TimelineComponent } from './containers/timeline/timeline.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'allusers', component: AllusersComponent},
  {path: 'timeline', component: TimelineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

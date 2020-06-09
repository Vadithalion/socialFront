import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public title: string;
  public identity: any;

  constructor(
    public userService: UserService

  ) {
    this.title = 'Bienvenid@ a La Red única';
    this.identity = this.userService.getIdentity();



  }

  ngOnInit(): void {
  }

}

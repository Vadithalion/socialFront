import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user/user.service';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.sass'],
  providers  : [UserService]

})
export class UserinfoComponent implements OnInit {
  public title: string;
  public status: string;
  public user: any;
  public url: string;
  public section: string;
  public identity;
  public token;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private userService: UserService,
  ) {
    this.title = 'Perfil';
  //  this.identity = this.userService.getIdentity();
  //  this.token = this.userService.getToken();
  }

  ngOnInit(): void {
  }

}

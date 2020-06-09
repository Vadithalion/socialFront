import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.sass']
})
export class AllusersComponent implements OnInit {
  public title: string;
  public loading: boolean;
  public total: string;
  public status: string;
  public url: string;
  public users: string;
  public identity;
  public token;
  public page;			// Página actual
  public next_page;		// Página siguiente
  public prev_page;		// Página previa
  public pages;
  public paginas;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) {
    this.title    = 'Gente';
    this.identity = this.userService.getIdentity();
    this.token    = this.userService.getToken();
    this.url      = 'http://localhost:8000/api';
    this.loading  = true;
  }

  ngOnInit(): void {
    this.actualPage();
  }
  actualPage(){
    this.route.params.subscribe(params => {
      let page = 1;
      if(params['page']) {
        page = +params['page']; //--> con el signo +, convertimos a entero
      }
      this.page = page;
      this.next_page = page+1;
      this.prev_page = page-1;
      if(this.prev_page <= 0){
        this.prev_page = 1;
      }
    });
/*
      // devolver listado de usuarios
      this.getUsers(page);*/
  }
/*
  getUsers(page){
    this.userService.getUsers(page).subscribe(
      response => {
        if(!response.users){
          this.loading = false;
          this.status = 'error';
        }else{
          this.loading = false;
          this.status = 'success';
          this.total = response.total;
        //  this.users = response.users;
          this.pages = response.pages;
        //  this.follows = response.users_following;
          this.paginas = Array.from(Array(this.pages).keys());
          Array.apply(null, {length: this.pages}).map(Number.call, Number);
          if(page > this.pages){ // --> si se pone una página incorrecta nos lleva a la primera
          this.router.navigate(['/allusers',1]);
        }
      }
      },
      error => {
        const errorMessage = error as any;
        console.log(errorMessage);
        if (errorMessage != null){
          this.loading = false;
          this.status = 'error';
        }
      }
      );
    }
    */
}

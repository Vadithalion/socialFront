import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public title: string;
  public identity;




  constructor(
    private userService: UserService,
    private router: Router


  ) {
    this.title = 'La Red Única!';

   }

  ngOnInit(): void {
    this.identity = this.userService.getIdentity();

  }

  logout(){
    localStorage.clear();
    this.identity = null;
    this.router.navigate(['/']);
    location.reload();
  }
}

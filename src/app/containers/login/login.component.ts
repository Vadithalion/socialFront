import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { UserService } from './../../services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})


export class LoginComponent implements OnInit {
  public title: string;
  public user: {};
  public status: string;
  public identity;
  public token;
  error = '';
  success = '';
  userForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('')
  });


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
    ) {
    this.title = 'Identifícate...';
    this.user = ('');
  }

  ngOnInit(): void {
  }


  click_login() {
    console.log(this.userForm.value);

    this.error = '';
    this.success = '';
    this.userService.login(this.userForm.value).then(
      res => {
        this.router.navigate(['/']);
        this.success = res;
        console.log('hola');
        this.identity = res;
        if(this.identity && this.identity._id){
          localStorage.setItem('identity', JSON.stringify(this.identity));
          this.getToken();
        }else{
          this.status = 'error';
        }
      },
      (err) => {
        this.error = err;
      }
      );
    }
  getToken() {
    throw new Error('Method not implemented.');
  }

    validarFormular() {}

    showPass() {
      const x = (document.getElementById('exampleInputPassword1') as HTMLInputElement);
      if (x.type === 'password') {
        x.type = 'text';
      } else {
        x.type = 'password';
      }
    }
  }

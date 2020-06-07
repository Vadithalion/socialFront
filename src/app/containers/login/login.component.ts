import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { UserService } from './../../services/user/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  error = '';
  success = '';
  userForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('')
  });


  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
  }

  click_login() {
    console.log(this.userForm.value);

    this.error = '';
    this.success = '';
    this.userService.login(this.userForm.value).then(
      res => {
        this.success = res;
        console.log('hola');
      },
      (err) => {
        this.error = err;
      }
    );
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

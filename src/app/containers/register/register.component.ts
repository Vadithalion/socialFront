import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})


export class RegisterComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl ('', Validators.required),
    surname: new FormControl(),
    password: new FormControl(),
    email: new FormControl()
  });

  constructor(
    private userService: UserService,
    private router: Router
  ) { }


  ngOnInit(): void {}

    click_register() {
      console.log(this.userForm.value);
      this.userService.register(this.userForm.value).then(
        res => {
          this.router.navigateByUrl('/register');
        },
        err => {
          console.error(err);
        }
      );
    }
  showPass() {
    const x = (document.getElementById('inputPassword') as HTMLInputElement);
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  }
}

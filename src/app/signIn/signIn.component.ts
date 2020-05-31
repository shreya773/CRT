import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service'

@Component({
  selector: 'app-signIn',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.css']
})
export class SignInComponent implements OnInit {
  user: IUser;
  submitted: boolean = false;

  constructor(private userService: UserService) {
    this.user = {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      password: '',
      address: '',
      pincode: 0,
      usertype: '',
      authmethod: '',
    };
  }

  ngOnInit() {
  }

  saveUser() {
    const data = { ...this.user };
    data.usertype = 'normal';
    data.authmethod = 'normal';

    this.userService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newUser() {
    this.submitted = false;
    this.user = {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      password: '',
      address: '',
      pincode: 0,
      usertype: '',
      authmethod: '',
    };
  }

}

interface IUser {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
  address: string;
  pincode: number;
  usertype: string;
  authmethod: string;
}

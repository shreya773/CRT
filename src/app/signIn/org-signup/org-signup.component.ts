import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service'

@Component({
  selector: 'app-org-signup',
  templateUrl: './org-signup.component.html',
  styleUrls: ['./org-signup.component.css']
})
export class OrgSignupComponent implements OnInit {
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

  saveOrgUser() {
    const data = { ...this.user };
    data.usertype = 'organization';
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

  newOrgUser() {
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

import { Component, OnInit } from '@angular/core';
import { SenderService } from '../sender.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //     user: any;
  // formInfo = {
  //   username: '',
  //   password: ''
  // };
  // error: string;
  // privateData: any = '';


  loginInfo = {};
  user: any;
  error: any;
  constructor(private mySessionService: SenderService) { }

  ngOnInit() {
   this.mySessionService.isLoggedIn()
      .then(userInfo => this.user = userInfo);
  }
  login() {
    const thePromise = this.mySessionService.login(this.loginInfo);

    thePromise.then((userInfo) => {
      this.user = userInfo;
      this.error = null;
    });

    thePromise.catch((err) => {
      this.user = null;
      this.error = err;
    });
  }

  // login() {
  //   this.session.login(this.formInfo)
  //     .subscribe(
  //       (user) => this.successCb(user),
  //       (err) => this.errorCb(err)
  //     );
  // }

  // signup() {
  //   this.session.signup(this.formInfo)
  //     .subscribe(
  //       (user) => this.successCb(user),
  //       (err) => this.errorCb(err)
  //     );
  // }

  // logout() {
  //   this.session.logout()
  //     .subscribe(
  //       () => this.successCb(null),
  //       (err) => this.errorCb(err)
  //     );
  // }

  // getPrivateData() {
  //   this.session.getPrivateData()
  //     .subscribe(
  //       (data) => this.privateData = data,
  //       (err) => this.error = err
  //     );
  // }

  // errorCb(err) {
  //   this.error = err;
  //   this.user = null;
  // }

  // successCb(user) {
  //   this.user = user;
  //   this.error = null;
  // }

}






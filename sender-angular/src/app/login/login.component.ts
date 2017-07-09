import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SenderService } from '../sender.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() logMe = new EventEmitter<object>();
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
    console.log('USER INFO', userInfo);
    console.log('USER', this.user);
    this.logMe.emit(this.user);
    console.log('this.user form logme', this.user);
    console.log('this.user -------', this.logMe.emit(this.user))
    });
    console.log('LOGIN INFO FROM THE HTML FORM', this.loginInfo);
    console.log(thePromise);


    thePromise.catch((err) => {
      this.user = null;
      this.error = err;
    });
  }


}






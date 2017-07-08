import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SenderService {
  // tslint:disable-next-line:no-inferrable-types
  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  // signup(user) {
  //   return this.http.post(`${this.BASE_URL}/signup`, user)
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }

  signup (user) {
    const theOriginalPromise = this.http.post('http://localhost:3000/signup', user).toPromise();

    const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });

    return theParsedPromise;
  }

login (credentials) {
    const theOriginalPromise = this.http.post('http://localhost:3000/login', credentials).toPromise();
    const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });
    return theParsedPromise;
  }
  // login(user) {
  //   return this.http.post(`/login`, user)
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }
  isLoggedIn () {
    return this.http.get('http://localhost:3000/loggedin')
      .toPromise()
      .then(result => result.json());
  }
  // isLoggedIn() {
  //   return this.http.get(`/loggedin`)
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }

  // logout() {
  //   return this.http.post(`/logout`, {})
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }


  // getPrivateData() {
  //   return this.http.get(`/private`)
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }


}





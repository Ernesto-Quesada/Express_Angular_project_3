import { Component, OnInit } from '@angular/core';
import { SenderService } from '../sender.service';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
user: Object= {};
  errorMessage: string = '';

  constructor(private myProfileService: SenderService) { }

  ngOnInit() {
   this.myProfileService.isLoggedIn()
      .then(userInfo => this.user = userInfo);
  }
}

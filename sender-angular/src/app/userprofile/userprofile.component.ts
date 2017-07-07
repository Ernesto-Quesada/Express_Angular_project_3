import { Component, OnInit } from '@angular/core';
import { SenderService } from '../sender.service';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
profile: Array<Object> = [];
  errorMessage: string = '';

  constructor(private myAppService: SenderService) { }

  ngOnInit() {
    this.myAppService.getProfile()
      .then((profile) => {
        this.profile = profile;
      })
      .catch((err) => {
        this.errorMessage = 'There was an error. Try again later.';
      });
  }
}

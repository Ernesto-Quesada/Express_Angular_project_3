import { Component , OnInit} from '@angular/core';
import { SenderService } from './sender.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: any;
    constructor(private mySessionService: SenderService) { }

// ngOnInit() {
//    this.mySessionService.isLoggedIn()
//       .then(userInfo => this.user = userInfo);
//   }


}

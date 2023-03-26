import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { SocialUser } from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = '';
  //user: SocialUser;
  loggedIn: boolean = false;

  constructor(private authService: SocialAuthService){
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      // this.user = user;
      console.warn('user data')
      console.warn( user )
      this.loggedIn = (user != null);
    });
  }

}

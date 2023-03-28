import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { SocialUser } from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
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
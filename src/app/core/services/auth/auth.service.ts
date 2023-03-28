import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
//import { AngularFireAuth } from 'angularfire2/auth';
//import { signInURL,checkfbuserURL,resetURL } from '@app/shared/const/url';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  status: boolean = false;
  public authChanged = new Subject<boolean>();
  public token = new Subject<string>();
  constructor(
    private http: HttpClient,
    private router:Router,
    //private firebaseAuth:AngularFireAuth
    ) {}

  public isAuthenticated(): boolean {
    /*
    if (this.getUserInfo()) {
      return true;
    } else {
      return false;
    }
    */
   return false;
  }

  public getToken(): Promise<string> {
    return new Promise((resolve, reject) => {
    /*
      this.firebaseAuth.authState.subscribe(async (user) => {
				if (user) {
					let token = await user.getIdToken ();
					resolve(token);
				}
			},error=> {
        console.error(error);
      });
    */
    });
  }

  private decodeToken(_token: any ): any {
    /*
    let i = signInURL;
    try{
      const base64Url = _token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
    }catch(e){
      console.error(e);
    }
    */
   return "example token decode";
  }

  /*
  signIn(token) {
    return this.http.post(signInURL, { token: token });
  }
  resetPassword(email) {
		return this.http.post(resetURL, {email:email});
	}

  checkfbuser(signin) {
		return this.http.post(checkfbuserURL, signin);
	}

  public setSession(_authResponse): void {
    if (!localStorage.getItem('company_id')) {
      localStorage.setItem('company_id', _authResponse.user.company);
    }
    localStorage.setItem('user_info', JSON.stringify(_authResponse.user));
    localStorage.setItem('roles_info', JSON.stringify(_authResponse.roles));
    localStorage.setItem(
      'permissions_info',
      JSON.stringify(_authResponse.permissions)
    );
  }
	public setToken(token): void {
		const expires_at = JSON.stringify(new Date(this.decodeToken(token).exp * 1000));
		localStorage.setItem('token', token);
		localStorage.setItem('expires_at', expires_at);
		this.updateToken(token);
    }

    public updateToken(token: string) {
		localStorage.setItem('token', token);
		this.token.next(token);
	}

	public changeState(status: boolean) {
		this.status = status;
		this.authChanged.next(status);
	}

  storeToken(token: string) {
    const expires_at = JSON.stringify(
      new Date(this.decodeToken(token).exp * 1000)
    );
    localStorage.setItem('token', token);
    localStorage.setItem('expires_at', expires_at);
  }

  setCompany(company_id) {
    localStorage.setItem('company_id', company_id);
  }

  cleanStorage() {
		localStorage.clear();
		this.router.navigate(['/sign_in']);
	//	this.util.show("The current session has expired or is not valid, please log in again", "Opps!", "error");
	}

  public getUserInfo():any {
		try {
			return JSON.parse(localStorage.getItem('user_info'));
		} catch (error) {
			this.cleanStorage();
		}
  }

  public logOut(){
    //this.fireDB.deleteCurrentSession(id);
		this.firebaseAuth.auth.signOut();
		if (!this.authChanged.isStopped) {
			this.changeState(false);
		}
		localStorage.removeItem('access_token');
		localStorage.removeItem('roles_info');
		localStorage.removeItem('permissions_info');
		localStorage.removeItem('expires_at');

		localStorage.removeItem('user_info');
		localStorage.removeItem('company_id');
		localStorage.removeItem('worker_id');
		localStorage.removeItem('did_worker');
		this.router.navigate(['/login']);
  }

  public getRoleInfo(): any{
    try {
      return JSON.parse(localStorage.getItem('roles_info'));
    } catch (error) {
      this.cleanStorage();
    }
  }
  */
}
import { Injectable, Type } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AdminGuardService implements CanActivate {
  constructor( public router: Router) { }
  canActivate(): boolean {
    let roleId = JSON.parse(localStorage.getItem("roles_info"))[0]["id"];
    if(roleId === 2 || roleId === 1 ){
      return true;
    }else{
      this.router.navigateByUrl("/messenger")
      return false;
    }
  }
}
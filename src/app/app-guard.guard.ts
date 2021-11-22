import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CrudService } from './crud.service';


@Injectable({
  providedIn: 'root'
})
export class AppGuardGuard implements CanActivate {
  usertoken = false;
  constructor(private router:Router) {
    console.log("Inisde appguard");
   }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      console.log("Inside canActivate of appguard");
    const isUser = sessionStorage.getItem('loginId')
    console.log(sessionStorage.getItem('loginId'));
    if (isUser) {
      console.log("Inisde if of canActivate of appguard ")
      return true;
    }
    else {
      console.log("Inisde else of canActivate of appguard ")
      this.router.navigate(['login'])
      return false
    }
  }
}

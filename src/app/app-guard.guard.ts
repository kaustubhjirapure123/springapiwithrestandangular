import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CrudService } from './crud.service';


@Injectable({
  providedIn: 'root'
})
export class AppGuardGuard implements CanActivate {
  usertoken = false;
  constructor(private router:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    const isUser = sessionStorage.getItem('loginId')
    if (isUser) {
      return true;
    }
    else {
      this.router.navigate(['login'])
      return false
    }
  }
}

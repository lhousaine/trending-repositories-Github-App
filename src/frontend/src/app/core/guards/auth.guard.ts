import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild,  Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationUtil } from '../utils/Authentication.util';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivateChild{

  constructor(private authUtil: AuthenticationUtil, public router: Router) {}

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      if (!this.authUtil.isAuthenticated()) {
        this.router.navigate(['signin']);
        return false;
      }
      return true;
    }
}
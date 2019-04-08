import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  Route,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  CanLoad
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;
    console.log("CAN LOOOOOOOOOOOOOOOOOOOOAD");

    return this.checkLogin(url);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isAuthenticated) {
      return true;
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    this.router.navigate(["/auth/signin"]);
    return false;
  }
}
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn: 'root'
  }
  )
export class LoginGuard implements CanActivate {
  public static COOKIE: string = 'nome';

  constructor(private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let value = LoginGuard.getCookie();
      if(!value) {
        this.router.navigate(['/login']);
      } else {
        return true;
      }
  }

  public static getCookie(): string|undefined {
    if(document.cookie == '') return;
    let cookies = document.cookie.split(';');
    return cookies.find( (value: string) => {
      return value.startsWith(LoginGuard.COOKIE+'=')
    });
  }

  public static getUser(): string|undefined {
    let cookie = LoginGuard.getCookie();
    if(cookie){
      return cookie.split('=')[1];
    }
    return;
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) { }
  async canActivate() {
    const isUserLoggedIn = await this.storage.get('isUserLoggedIn');
    if (isUserLoggedIn) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
    }
  }


}

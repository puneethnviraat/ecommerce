import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class AuthGuardService implements CanActivate{
  constructor(private auth:AuthService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

 
 return this.auth.user$.map(user=>{
    if (user) return true;

    this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
    return false;
  })
}
}

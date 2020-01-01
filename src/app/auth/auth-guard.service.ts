import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";

/**
 * Created by ahmed on 20/11/2018.
 */

export class AuthGuard implements CanActivate{

  constructor(private authService:AuthService){}

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    return this.authService.isAuthenticated();
  }

}

import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authService: AuthService,
  private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if (this.authService.isAuthenticated()){
      return true;
    }
    else{
      //if not signin, when clicking add New Recipe, redirect to signin page
      this.router.navigate(['/signin']);
      return false;
    }
  }
}
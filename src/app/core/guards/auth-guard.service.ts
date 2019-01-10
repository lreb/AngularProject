// import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {


    constructor
    (
        // private _authService: AuthService,
        private router: Router) {
    }

    // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //     if (
    //         // this._authService.isAuthenticated()
    //         true
    //     ) {
    //         return true;
    //     }

    //     // navigate to login page
    //     this._router.navigate(['/public']);
    //     // you can save redirect url so after authing we can move them back to the page they requested
    //     return false;
    // }

    canActivate(): boolean {
        // !this.auth.isAuthenticated()
        const can = false;
        if (can) {
            this.router.navigate(['public']);
            return false;
        }
        return true;
    }

}

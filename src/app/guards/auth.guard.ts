import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../Services/api.service';
import { filter, map, take } from 'rxjs/operators'
import { AuthenticationService } from '../Services/authentication.service';

@Injectable({
  providedIn: 'root'
})
//AuthGuard : Sécurisez les pages internes de votre application

export class AuthGuard implements CanLoad {
  constructor(private authService: AuthenticationService, private router: Router) { }
  canLoad(): Observable<boolean> {
		return this.authService.isAuthenticated.pipe(
			filter((val) => val !== null), // Filter out initial Behaviour subject value
			take(1), // Otherwise the Observable doesn't complete!
			map((isAuthenticated) => {
				if (isAuthenticated) {
          console.log('Found previous token, automatic login');
          if (isAuthenticated) {
            // Directly open inside area
            this.router.navigateByUrl('/dashbord', { replaceUrl: true });
          }
					return false;
				} else {
					// Simply allow access to the login
					return true;
				}
			}
      )
		);
	}


}

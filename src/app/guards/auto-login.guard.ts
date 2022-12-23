import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../Services/authentication.service';
import { filter, map, take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
//AutoLoginGuard : connectez automatiquement un utilisateur au démarrage de l'application s'il est déjà authentifié auparavant
export class AutoLoginGuard implements CanLoad {
  constructor(private authService: AuthenticationService, private router: Router) { }
  canLoad(): Observable<boolean>{
    return this.authService.isAuthenticated.pipe(
      filter((val) => val !== null), // Filter out initial Behaviour subject value
      take(1), // Otherwise the Observable doesn't complete!
      map((isAuthenticated) => {
				if (isAuthenticated) {
					return true;
				} else {
					this.router.navigateByUrl('/login');
					return false;
				}
			}
      )
		);
  }
  
}

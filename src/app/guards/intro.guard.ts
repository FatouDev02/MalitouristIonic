import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@capacitor/storage';
export const INTRO_KEY = 'intro-seen';

@Injectable({
  providedIn: 'root'
})
//IntroGuard : Vérifiez si l'utilisateur a déjà vu l'intro et affichez la page sinon

export class IntroGuard implements CanLoad {
  constructor(private router: Router) { }

  async canLoad(): Promise<boolean> {
    const hasSeenIntro = await Storage.get({key: INTRO_KEY});
    if (hasSeenIntro && (hasSeenIntro.value === 'true')) {
      return true;
    } else {
      this.router.navigateByUrl('/inside', { replaceUrl:true });
      return false;
    }
}


}



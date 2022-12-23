import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../Services/auth.service';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  img="../assets/avatar.png"
  Utilisateur:any;


  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  constructor(private router:Router,private menu: MenuController,private storageService: StorageService, private authService: AuthService) { }
  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }








  FermerSideBar(){
    this.menu.close()
    setTimeout(() => {
      window.location.reload()
    }, 0);
  }

  deconnecter(){
    localStorage.clear()
    this.router.navigate(['../login'])
  }


  ionViewWillEnter(){
   //this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'))
    
    // if(this.Utilisateur.image!=null){
    // //  this.img=this.Utilisateur.image
    // }
   // console.log(this.Utilisateur)
  }

}

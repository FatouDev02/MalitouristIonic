import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../Services/api.service';
import { AuthenticationService } from '../Services/authentication.service';
import { RegionService } from '../Services/region.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  secretData = null;
  content?: string;
  reg:any
  id:any
  constructor(private userService:UserService,private regionservice:RegionService,
    private route:ActivatedRoute,
    private authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {console.log(err)
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = "Error with status: " + err.status;
        }
      }
    })
    // const idpays = this.route.snapshot.params['id']
    // this.id = idpays
    // console.log(idpays)
    // this.regionservice.getpaysbyid(idpays).subscribe((data)=>{
    //   this.reg=data;
    //   console.log(this.reg)
    // })
    // this.regionservice.getregionparpays(idpays).subscribe((data)=>{
    //   this.reg=data;
    //   console.log(this.reg)
    // })

  }
  
  async logout() {
		await this.authService.logout();
		this.router.navigateByUrl('/', { replaceUrl: true });
	}
}

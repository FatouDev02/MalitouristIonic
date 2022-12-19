import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  secretData = null;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }
  async getData() {
    this.secretData = null;

    this.apiService.getSecretData().subscribe((res: any) => {
      this.secretData = res.msg;
    });
  }

  logout() {
   // this.apiService.logout();
  }
}

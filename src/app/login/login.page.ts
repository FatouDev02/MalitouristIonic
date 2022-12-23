import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../Services/api.service';
import { AuthService } from '../Services/auth.service';
import { AuthenticationService } from '../Services/authentication.service';
import { StorageService } from '../Services/storage.service';
import { UserService } from '../Services/user.service';
import { User } from '../userr';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

 constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }
//http://localhost:8080/ApiTourist/user/login',
onSubmit(): void {
  const { username, password } = this.form;

  this.authService.login(username, password).subscribe({
    next: data => {
      this.storageService.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      this.reloadPage();
    },
    error: err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  });
}

reloadPage(): void {
  window.location.reload();
}

  
}





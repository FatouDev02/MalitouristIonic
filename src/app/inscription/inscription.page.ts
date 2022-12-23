import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { UserService } from '../Services/user.service';
import { User } from '../userr';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  // form!:FormGroup
  // user!:User;
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private fb:FormBuilder,private router:Router,private http:HttpClient,private authService:AuthService) { }

  // ngOnInit() {
  //   this.form=this.fb.group({
  //       nom_prenom:['',Validators.required],
  //       username:['',Validators.required],
  //       email:['',Validators.required],
  //       password: ['', Validators.required],
  //   });
  // }
  ngOnInit(): void {
  }
 
  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }












//   ajoutUser(){
//     this.user = this.form.value
//     this.userservices.addUser(this.user).subscribe(
//       data =>{
//         this.form.reset()
//         console.log(data);
        
//       }
//     );
//   } 
  
//   addUser(){
//     this.http.post('http://localhost:8080/ApiTourist/user/addusser',this.form.getRawValue()).subscribe(
//       (data)=>{
//         this.form.reset()
//         console.log(data)
//         this.router.navigate(['/login'])
//       }
//     );
// } 

}

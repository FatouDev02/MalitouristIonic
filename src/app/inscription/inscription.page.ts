import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { User } from '../userr';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  form!:FormGroup
  user!:User;
  constructor(private fb:FormBuilder,private router:Router,private http:HttpClient,private userservices:UserService) { }

  ngOnInit() {
    this.form=this.fb.group({
      nom_prenom:['',Validators.required],
        username:['',Validators.required],
        email:['',Validators.required],
        password: ['', Validators.required],
    });
  }
  ajoutUser(){
    this.user = this.form.value
    this.userservices.addUser(this.user).subscribe(
      data =>{
        this.form.reset()
        console.log(data);
        
      }
    );
  }  
  addUser(){
      this.http.post('http://localhost:8080/ApiTourist/user/addusser',this.form.getRawValue()).subscribe(
        (data)=>{
          this.form.reset()
          console.log(data)
          this.router.navigate(['/login'])
        }
      );
  }
}

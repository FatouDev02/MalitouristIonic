import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../Services/api.service';
import { UserService } from '../Services/user.service';
import { User } from '../userr';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
form!:FormGroup
user!:User;
password:string=''
username:string = ''

error!:Boolean;
erreur!:String;

credentials!: FormGroup;

 constructor(private router:Router,private userservices:UserService, private apiservice:ApiService,
  private loadingController: LoadingController,private fb:FormBuilder,private http:HttpClient,private alertcontroller:AlertController) { }

 
  ngOnInit() {
    this.credentials = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  async login() {
   // const loading = await this.loadingController.create();
   // await loading.present();

    //this.apiservice.login(this.credentials.value).subscribe(
    //   async _ => {
    //     await loading.dismiss();
    //     this.router.navigateByUrl('/accueil', { replaceUrl: true });
    //   },
    //   async (res) => {
    //     await loading.dismiss();
    //     const alert = await this.alertcontroller.create({
    //       header: 'Login failed',
    //       message: res.error.msg,
    //       buttons: ['OK'],
    //     });
    //     await alert.present();
    //   }
    // );
    this.http.post('http://localhost:8080/ApiTourist/user/login',this.form.getRawValue()).subscribe(
      (data)=>{
        this.router.navigate(['/accueil']);
      }
    );  
  }

  ///////////////incription
  async signUp() {
    // const loading = await this.loadingController.create();
    // await loading.present();

    // this.apiservice.signUp(this.credentials.value).subscribe(
    //   async _ => {
    //     await loading.dismiss();
    //     this.login();
    //   },
    //   async (res) => {
    //     await loading.dismiss();
    //     const alert = await this.alertcontroller.create({
    //       header: 'Signup failed',
    //       message: res.error.msg,
    //       buttons: ['OK'],
    //     });
    //     await alert.present();
    //   }
    // );
  }




































  logForm(){
    //this.spinner.show();

    try {
      this.error=false;
      this.erreur=""
      this.userservices.login(this.username,this.password).subscribe(data=>{
      //on vas recupere le message de retour et voir si tout ses bien passe
        console.log(data);
      if(data.message=="ok"){
        //enregistrement de l'utilisateur dans le local storage
        localStorage.setItem('utilisateur',JSON.stringify(data.data))

        // if(data.data.role.libellerole=="ADMIN"){
          //rediriger vers la page admin

          this.router.navigate(['/accueil'])
         // this.spinner.hide();

        // }else if(data.data.role.libellerole=="RESPONSABLE"){
          //rediriger vers la page responsable

        // }else{
          //rediriger vers la page du simple utilisateur

        // }
      }else if(data.message=="error"){
        this.error=true;
        this.erreur=data.data
       // this.spinner.hide();
      }else{
        this.error=true;
        this.erreur="Erreur liée au serveur !"
        //this.spinner.hide();
      }
    })

    } catch (error) {
      this.error=true;
        this.erreur="Erreur liée aau serveur !"
       // this.spinner.hide();
    }
  }




}

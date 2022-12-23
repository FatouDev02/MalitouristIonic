import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Pays } from '../Pays';
import { PaysService } from '../Services/pays.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-ajout-pays',
  templateUrl: './ajout-pays.page.html',
  styleUrls: ['./ajout-pays.page.scss'],
})
export class AjoutPaysPage implements OnInit {
  message!: string;
  erreur!: boolean;
  fichier: any;
  myform!:FormGroup
  nompays:any
  superficie:any
  description:any
  capitale:any
  drapeau:any
  file:any
  pays!:Pays
  name!: string;
  a:any

  constructor(private router:Router,private paysservice:PaysService,private http:HttpClient,private modalCtrl: ModalController,private fb:FormBuilder ) { }

  ngOnInit() {
    // this.myform = this.fb.group({
    //   nom: ['', Validators.required],
    //   superficie: ['', Validators.required],
    //   capitale: ['', Validators.required],
    //   drapeau:['',]
    // });
  }
  addpays(){ 
    var pays=[{
      'nompays':this.nompays,
      'superficie':this.superficie,
      'description':this.description,
      'capitale':this.capitale,
      'drapeau':'',
    }]
    const data=new FormData()
    data.append('file',this.fichier)

    data.append('pays',JSON.stringify(pays).slice(1,JSON.stringify(pays).lastIndexOf(']')))
    this.http.post('http://localhost:8080/ApiTourist/pays/add',data).subscribe(
      (data)=>{
       //this.myform.reset()
       this.a=data
        console.log(this.a)
       // this.router.navigate(['/pays'])
      }
    );
   }
  
  selectFile(e:any){
    //verification si une photo a été choisie ou pas
    if(!e.target.files[0] || e.target.files[0].length==0){
      this.message="Vous devez choisir un fichier  !";
      this.erreur=true;
      return;
    }

    //verification du type de fichier choisi pour recaler si ce n'est pas une photo
    var typeFichier=e.target.files[0].type;
    if(e.target.files){
      var reader= new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.message="";
        //this.fichier=event.target.result;
        this.fichier=e.target['files'][0];
      }
    }
  }
// addpays(){
  //   this.pays= this.myform.value
  //   this.paysservice.addPays(this.pays).subscribe(
  //     data=>{
  //       this.myform.reset()
  //       console.log(data)

  //     }
  //   )
  // }

}

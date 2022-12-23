import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { AjoutPaysPage } from '../ajout-pays/ajout-pays.page';
import { PaysService } from '../Services/pays.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.page.html',
  styleUrls: ['./pays.page.scss'],
})
export class PaysPage implements OnInit {
allpays!:any
i!:string
  titre: any;
  img: any;
  description: any;
  message: any;
  erreur: any;
  fichier:any;
  constructor(private modalCtrl: ModalController,private paysservice:PaysService,private router:Router,private alertController: AlertController,private http:HttpClient) {
    
   }

  ngOnInit() {
    this.AllPays();
    
 
  }
  // AllPays(){
  //   this.paysService.getall().subscribe(data=>{
  //     this.allpays=data
  //     console.log(this.allpays)
  //     // if (data.message == 'ok') {
  //     //   this.allpays = data.data
  //     //   this.i = data.data.length
  //     //   console.log(data.data)
  //     // }

  //   })
  // }
  AllPays(){
    this.paysservice.getall().subscribe(
      (data)=>{
          this.allpays=data
          console.log(this.allpays)
      }
    );
  }

  addactivity(){ 
    var activite=[{
      'titre':this.titre,
      'description':this.description,
      'img':'',
    }]
    const data=new FormData()
    data.append('file',this.fichier)

    data.append('activite',JSON.stringify(activite).slice(1,JSON.stringify(activite).lastIndexOf(']')))
    this.http.post('http://localhost:8080/ApiTourist/activite/add',data).subscribe(
      (data)=>{
       //this.myform.reset()
        console.log(data)
        this.router.navigate(['/allactivity'])
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
}

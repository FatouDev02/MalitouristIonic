import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Region } from '../Region';
import { ActivityService } from '../Services/activity.service';
import { PaysService } from '../Services/pays.service';
import { RegionService } from '../Services/region.service';

@Component({
  selector: 'app-creer-region',
  templateUrl: './creer-region.page.html',
  styleUrls: ['./creer-region.page.scss'],
})
export class CreerRegionPage implements OnInit {
message!:String
erreur:any
fichier:any
externes:any;
activity:any
Chiffre:any
annee:any
nompays:any
  act: any;
  img:any
  region!:Region
  coderegion:any
  nom:any
  Superficie:any
  langue:any
  description:any
  populations:any
  form!:FormGroup
  alertNomTrue:any
  alertNomFalse:any
  messageerror:any
  activitilist: any;
  allpays:any
activites: any;
file: any
domaineactivite:any
  pays: any;
  constructor(private regionserv:RegionService,private fb:FormBuilder,private actservice:ActivityService,private paysservice:PaysService,private http:HttpClient) { }

  ngOnInit() {
//  this.form = this.fb.group({
//   coderegion: ['', Validators.required],
//   nom: ['', Validators.required],
//   domaineactivite: ['', Validators.required],
//   langue: ['', Validators.required],
//   Superficie: ['', Validators.required],
//   description: ['', Validators.required],
//   Chiffre: ['', Validators.required],
//   annee: ['', Validators.required],
//   nompays: ['', Validators.required],

//       img:['',]
//     });


    this.actservice.Allactivity().subscribe(
      (data)=>{
          this.activity=data
          console.log(this.activity)
      }
    );
    this.paysservice.getall().subscribe(
      (data)=>{
          this.allpays=data
          console.log(this.allpays)
      }
    );
    

  }

// addRegion(){
  
  
//     this.region= this.form.value
    
//     this.regionserv.ajouterRegion(this.coderegion,this.nom,this.domaineactivite,
//       this.langue,this.Superficie,this.description,this.Chiffre,this.annee,this.nompays,this.file).subscribe(
//       data=>{
//         this.form.reset()
//         console.log(data)

//       }
//     )
//   }



  selectFile(e:any){
    console.log("rrrrrrrrrr")
    //verification si une photo a été choisie ou pas
    if(!e.target.files[0] || e.target.files[0].length==0){
      this.message="Vous devez choisir un fichier execel !";
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






  CreerRegion(){

   
  
   // var activitlist=[]
    var idpays=0;


    //recuperation de l'id  de l'activite
    for(let i=0 ; i<this.activity.length; i++){
      if(this.activity[i].titre==this.activity){
        const idact=this.activity[i]
        console.log(idact)
      }
    }
    
     //recuperation de l'id du pays
     for(let i=0 ; i<this.allpays.length; i++){
      if(this.allpays[i].nompays==this.nompays){
        idpays=this.allpays[i]
        console.log(idpays)
      }

     }

 
    var region=[{
      "coderegion":this.coderegion,
      "nom":this.nom,
      "domaineactivite":this.domaineactivite,
      "langue":this.langue,
      "superficie":this.Superficie,
      "description":this.description,
      "img":" "
    }]
    var population=[{
      "chiffre":this.Chiffre,
      "annee":this.annee,
    }]
    if(this.coderegion == null){
      this.alertNomTrue=true
      this.alertNomFalse=false
      this.messageerror="  Definissez le code region !"
    }
    else if(this.nom == null) {
      this.alertNomTrue=true
      this.alertNomFalse=false
      this.messageerror="Donnez un nom a la région !"
    }else if(this.langue == null ){
      this.alertNomTrue=true
      this.alertNomFalse=false
      this.messageerror="  Donnez la langue parlée de la région!"
    }
    
    else if(this.description == null){
      this.alertNomTrue=true
      this.alertNomFalse=false
      this.messageerror="  Donnez une description à la région"
    }else if(this.nompays==null){
      this.alertNomTrue=true
      this.alertNomFalse=false
      this.messageerror="  Choisissez le pays !"
    }
    else if(this.img == null){
      this.alertNomTrue=true
      this.alertNomFalse=false
      this.messageerror="  Veuillez ajoutez une image !"
    }else if(this.description == null){
      this.alertNomTrue=true
      this.alertNomFalse=false
      this.messageerror="  Veuillez donner une description à l'activité !"
    }else{
      const data=new FormData()
      data.append('file',this.fichier)
      data.append('population',JSON.stringify(population).slice(1,JSON.stringify(population).lastIndexOf(']')))

      data.append('region',JSON.stringify(region).slice(1,JSON.stringify(region).lastIndexOf(']')))
      this.regionserv.add(this.nompays,population,region,this.fichier).subscribe(
        (data)=>{
         //this.myform.reset()
          console.log(data)
         // this.router.navigate(['/pays'])
        }
      );




    }



  }
  
}


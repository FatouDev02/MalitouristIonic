import { Component, OnInit } from '@angular/core';
import { RegionService } from '../Services/region.service';

@Component({
  selector: 'app-creer-region',
  templateUrl: './creer-region.page.html',
  styleUrls: ['./creer-region.page.scss'],
})
export class CreerRegionPage implements OnInit {
  activites:any;
message!:String
erreur:any
fichier:any
externes:any;
activity:any
  act: any;
  img:any
  pays:any
  coderegion:any
  nomregion:any
  Superficie:any
  langue:any
  description:any
  populations:any
  
  alertNomTrue:any
  alertNomFalse:any
  messageerror:any
  activitilist: any;
  constructor(private regionserv:RegionService) { }

  ngOnInit() {
  }
  selectFile(e:any){
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






  // CreerRegion(){

   
  
  //   var activitlist=[]
  //   var idpays=0;


  //   try {
  //     for(let i=0;i<this.activity.length;i++){
  //       const array=this.activity[i];

  //       if(this.act[i].titre==array[0]){
  //         console.log(this.act[i])
  //         activitlist.push(this.externes[i])
  //       }
        
       
  //     }
  //   } catch (error) {
      
  //   }
  //   console.log(activitlist);
  //    //recuperation de l'id des formateurs
  //    for(let i=0 ; i<this.pays.length; i++){
  //     if(this.pays[i].libelle==this.pays){
  //       idpays=this.pays[i]
  //       console.log(idpays)
  //     }
  //    }

 
  //   var region=[{
  //     "coderegion":this.coderegion,
  //     "nomregion":this.nomregion,
  //     "langue":this.langue,
  //     "description":this.description,
  //     "pays":this.pays,
  //     "populations":this.populations,
  //     "activitesList":activitlist,
  //   }]
  //   if(this.coderegion == null){
  //     this.alertNomTrue=true
  //     this.alertNomFalse=false
  //     this.messageerror="  Definissez le code region !"
  //   }
  //   else if(this.nomregion == null) {
  //     this.alertNomTrue=true
  //     this.alertNomFalse=false
  //     this.messageerror="Donnez un nom a la région !"
  //   }else if(this.langue == null ){
  //     this.alertNomTrue=true
  //     this.alertNomFalse=false
  //     this.messageerror="  Donnez la langue parlée de la région!"
  //   }
    
  //   else if(this.description == null){
  //     this.alertNomTrue=true
  //     this.alertNomFalse=false
  //     this.messageerror="  Donnez une description à la région"
  //   }else if(this.pays==null){
  //     this.alertNomTrue=true
  //     this.alertNomFalse=false
  //     this.messageerror="  Choisissez le pays !"
  //   }
  //   else if(this.img == null){
  //     this.alertNomTrue=true
  //     this.alertNomFalse=false
  //     this.messageerror="  Veuillez ajoutez une image !"
  //   }else if(this.activitilist == null){
  //     this.alertNomTrue=true
  //     this.alertNomFalse=false
  //     this.messageerror="  Veuillez donner une description à l'activité !"
  //   }else{
  //     this.regionserv.ajoutRegion(this.fichier,region).subscribe(data=>{
  //       console.log(data)
  //       // if(data.message == 'ok'){
  //       //   this.ajoutactivite();
         

            
  //       // }
  //       // else{
  //       //   this.alertNomTrue=true
  //       //   this.alertNomFalse=false
  //       //   this.messageerror=data.data
  //       // }

  //     })




  //   }



  // }
  // ajoutactivite(){
    
  //   Swal.fire({
  //     title: "Activité créee avec Succès",
  //     showConfirmButton: true,
  //     confirmButtonText: "OK",
  //     confirmButtonColor: 'green',
  //     // showCancelButton: true,
  //     // cancelButtonText: "Annuler",
  //     // cancelButtonColor: 'red',
  //     heightAuto: false
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.router.navigate(["/dashboard/allactivity"]);

  //       // this.router.navigateByUrl('/dashboard/allactivity', {skipLocationChange: true}).then(() => {
  //       //   this.router.navigate(["/allactivity"])
  //       // })
  //   }
  // });
}



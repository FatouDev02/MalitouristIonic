import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivityService } from '../Services/activity.service';

@Component({
  selector: 'app-allactivity',
  templateUrl: './allactivity.page.html',
  styleUrls: ['./allactivity.page.scss'],
})
export class AllactivityPage implements OnInit {
  activity:any
  idact: any;
  suppvar: any;
  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router,private actservice:ActivityService) {}

  ngOnInit() {
    const idactivite = this.route.snapshot.params['id']
    this.idact = idactivite
   

    this.Allactivity()
  }

Allactivity(){
  this.actservice.Allactivity().subscribe(
    (data)=>{
        this.activity=data
        console.log(this.activity)
    }
  );
}



update(){
  this.http.get('http://localhost:8080/ApiTourist/activite/update/id').subscribe(
    (data)=>{
        this.activity=data
        console.log(this.activity)
    }
  );
}
succesImport() {
  Swal.fire({
    title: "Attention vous etes sûr de vouloir SUPPRIMER cette activité",
    showConfirmButton: true,
    confirmButtonText: "Oui",
    confirmButtonColor: 'green',
    showCancelButton: true,
    cancelButtonText: "Non",
    cancelButtonColor: 'red',
    heightAuto: false
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire({
        title: " Suppression definitive?",
        showConfirmButton: true,
        confirmButtonText: "Confirmer",
        confirmButtonColor: 'green',
        showCancelButton: true,
        cancelButtonText: "Annuler",
        cancelButtonColor: 'red',
        heightAuto: false
      }).then((result) => {
        if (result.isConfirmed) {
          this.delete()
          this.router.navigateByUrl('/dashboard/allactivity', {skipLocationChange: true}).then(() => {
            this.router.navigate(["/dashboard/allactivity"])
          })
      }else if(result.isDenied) {
        Swal.fire('Suppression annuler !');
      }

    });
  }else if (result.isDenied) {
    // Swal.fire('Changes are not saved', '', 'info');
  }
});


}

delete(){
  this.actservice.getactivitybyId(this.idact).subscribe((rrr)=>{
  console.log(rrr)
  this.suppvar=rrr.message;
  console.log(this.suppvar)

  });
}

}

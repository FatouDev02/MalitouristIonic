import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionService } from '../Services/region.service';

@Component({
  selector: 'app-detailpays',
  templateUrl: './detailpays.page.html',
  styleUrls: ['./detailpays.page.scss'],
})
export class DetailpaysPage implements OnInit {
  id:any
  reg:any
  nombre:any

  test:any

  capital:any

  idPays : any;
  description:any;
  nompays:any
  superficie:any
  drapeau:any
  

  constructor(private route:ActivatedRoute,private regionservice:RegionService,) { }

  ngOnInit() {

    this.recupererPaysParId();
    this.recupererNombre()
    this.recupererRegionPays()
  }


  recupererRegionPays(){
    this.regionservice.getregionparpays(this.idPays).subscribe((d)=>{
      this.reg=d;
      console.log(this.reg)
    });
  }


  recupererNombre(){
    this.regionservice.getnombre(this.idPays).subscribe((dr)=>{
      this.nombre=dr;
      console.log(this.nombre)
    });
  }



  recupererPaysParId(){

    this.idPays = this.route.snapshot.params['id']
    //this.id = this.idPays;

    this.regionservice.getpaysbyid(this.idPays).subscribe(
      (data)=>{
        //console.log("")
      this.test = data;
      console.log("je suis le resultat");
      console.log(this.test)
      this.capital = data.capitale;
      this.description=data.description
      this.superficie=data.superficie
      this.nompays=data.nompays
    });
  }

}

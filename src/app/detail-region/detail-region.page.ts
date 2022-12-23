import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionService } from '../Services/region.service';

@Component({
  selector: 'app-detail-region',
  templateUrl: './detail-region.page.html',
  styleUrls: ['./detail-region.page.scss'],
})
export class DetailRegionPage implements OnInit {
id:any
myregion:any
  constructor( private route:ActivatedRoute,private router:Router,private regionservice:RegionService) { }

  ngOnInit() {
    const idactivite = this.route.snapshot.params['id']
    this.id = idactivite
    console.log(idactivite)
    //this.idact = idactivite
    this.regionservice.getregionbyid(idactivite).subscribe(
      (data)=>{
        this.myregion=data
        console.log(this.myregion)
      }
    )
    
  }
  

}

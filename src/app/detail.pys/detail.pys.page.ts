import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionService } from '../Services/region.service';

@Component({
  selector: 'app-detail.pys',
  templateUrl: './detail.pys.page.html',
  styleUrls: ['./detail.pys.page.scss'],
})
export class DetailPysPage implements OnInit {
id:any
reg:any
  constructor(private route:ActivatedRoute,private regionservice:RegionService,) { }

  ngOnInit() {
    const idpays = this.route.snapshot.params['id']
    this.id = idpays
    console.log(idpays)
    this.regionservice.getpaysbyid(idpays).subscribe((data)=>{
      this.reg=data;
      console.log(this.reg)
    })
    this.regionservice.getregionparpays(idpays).subscribe((data)=>{
      this.reg=data;
      console.log(this.reg)
    })

  }

}

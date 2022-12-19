import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
  constructor(private modalCtrl: ModalController,private paysService:PaysService,private http:HttpClient) {
    
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
    this.http.get('http://localhost:8080/ApiTourist/pays/listpays').subscribe(
      (data)=>{
          this.allpays=data
          console.log(this.allpays)
      }
    );
}
}

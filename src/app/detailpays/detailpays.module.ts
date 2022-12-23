import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailpaysPageRoutingModule } from './detailpays-routing.module';

import { DetailpaysPage } from './detailpays.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailpaysPageRoutingModule
  ],
  declarations: [DetailpaysPage]
})
export class DetailpaysPageModule {}

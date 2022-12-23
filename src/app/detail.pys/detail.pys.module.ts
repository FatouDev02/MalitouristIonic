import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detail.PysPageRoutingModule } from './detail.pys-routing.module';

import { Detail.PysPage } from './detail.pys.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detail.PysPageRoutingModule
  ],
  declarations: [Detail.PysPage]
})
export class Detail.PysPageModule {}

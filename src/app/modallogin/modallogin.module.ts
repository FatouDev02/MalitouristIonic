import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalloginPageRoutingModule } from './modallogin-routing.module';

import { ModalloginPage } from './modallogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalloginPageRoutingModule
  ],
  declarations: [ModalloginPage]
})
export class ModalloginPageModule {}

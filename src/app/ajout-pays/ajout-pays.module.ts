import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutPaysPageRoutingModule } from './ajout-pays-routing.module';
import {  ReactiveFormsModule } from '@angular/forms';

import { AjoutPaysPage } from './ajout-pays.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    
    AjoutPaysPageRoutingModule
  ],
  declarations: [AjoutPaysPage]
})
export class AjoutPaysPageModule {}

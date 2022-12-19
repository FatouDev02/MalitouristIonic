import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreerRegionPageRoutingModule } from './creer-region-routing.module';

import { CreerRegionPage } from './creer-region.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreerRegionPageRoutingModule
  ],
  declarations: [CreerRegionPage]
})
export class CreerRegionPageModule {}

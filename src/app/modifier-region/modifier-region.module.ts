import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierRegionPageRoutingModule } from './modifier-region-routing.module';

import { ModifierRegionPage } from './modifier-region.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierRegionPageRoutingModule
  ],
  declarations: [ModifierRegionPage]
})
export class ModifierRegionPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierRegionPage } from './modifier-region.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierRegionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierRegionPageRoutingModule {}

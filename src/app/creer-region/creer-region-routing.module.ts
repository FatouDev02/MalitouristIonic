import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreerRegionPage } from './creer-region.page';

const routes: Routes = [
  {
    path: '',
    component: CreerRegionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreerRegionPageRoutingModule {}

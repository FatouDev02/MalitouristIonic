import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutPaysPage } from './ajout-pays.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutPaysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutPaysPageRoutingModule {}

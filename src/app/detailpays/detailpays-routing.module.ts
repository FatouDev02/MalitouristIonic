import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailpaysPage } from './detailpays.page';

const routes: Routes = [
  {
    path: '',
    component: DetailpaysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailpaysPageRoutingModule {}

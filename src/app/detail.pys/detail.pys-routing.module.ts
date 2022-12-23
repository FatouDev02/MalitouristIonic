import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detail.PysPage } from './detail.pys.page';

const routes: Routes = [
  {
    path: '',
    component: Detail.PysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detail.PysPageRoutingModule {}

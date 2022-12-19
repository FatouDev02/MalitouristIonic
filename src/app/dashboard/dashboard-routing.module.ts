import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children:[
      {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
      },
        {
          path: 'accueil',
          loadChildren: () => import('../accueil/accueil.module').then( m => m.AccueilPageModule)
        },
        {
          path: 'detail-region',
          loadChildren: () => import('../detail-region/detail-region.module').then( m => m.DetailRegionPageModule)
        },
        {
          path: 'creer-region',
          loadChildren: () => import('../creer-region/creer-region.module').then( m => m.CreerRegionPageModule)
        },
        {
          path: 'modifier-region',
          loadChildren: () => import('../modifier-region/modifier-region.module').then( m => m.ModifierRegionPageModule)
        },
        {
          path: 'ajout-pays',
          loadChildren: () => import('../ajout-pays/ajout-pays.module').then( m => m.AjoutPaysPageModule)
        },
        {
          path: 'regions',
          loadChildren: () => import('../regions/regions.module').then( m => m.RegionsPageModule)
        },
        {
          path: 'pays',
          loadChildren: () => import('../pays/pays.module').then( m => m.PaysPageModule)
        },
        {
          path: 'contact',
          loadChildren: () => import('../contact/contact.module').then( m => m.ContactPageModule)
        },
        
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}

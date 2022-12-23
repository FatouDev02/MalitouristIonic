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
        path: 'profil',
        loadChildren: () => import('../profil/profil.module').then( m => m.ProfilPageModule)
      },
     
        {
          path: 'accueil',
          loadChildren: () => import('../accueil/accueil.module').then( m => m.AccueilPageModule)
        },
        {
          path: 'detail-region/:id',
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
          path: 'detailpays/:id',
          loadChildren: () => import('../detailpays/detailpays.module').then( m => m.DetailpaysPageModule)
        },
  
        {
          path: 'pays',
          loadChildren: () => import('../pays/pays.module').then( m => m.PaysPageModule)
        },
        {
          path: 'contact',
          loadChildren: () => import('../contact/contact.module').then( m => m.ContactPageModule)
        },
        {
          path: 'board-admin',
          loadChildren: () => import('../board-admin/board-admin.module').then( m => m.BoardAdminPageModule)
        },
        {
          path: 'board-moderator',
          loadChildren: () => import('../board-moderator/board-moderator.module').then( m => m.BoardModeratorPageModule)
        },
        {
          path: 'board-user',
          loadChildren: () => import('../board-user/board-user.module').then( m => m.BoardUserPageModule)
        },
        {
          path: 'modallogin',
          loadChildren: () => import('../modallogin/modallogin.module').then( m => m.ModalloginPageModule)
        },
        {
          path: 'allactivity',
          loadChildren: () => import('../allactivity/allactivity.module').then( m => m.AllactivityPageModule)
        },
       
       
       
        
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}

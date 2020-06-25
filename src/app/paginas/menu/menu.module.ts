import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'user',
        loadChildren: () => import('../user/user.module').then(m => m.UserPageModule)
      },
      {
        path: 'bussines',
        loadChildren: () => import('../bussines/bussines.module').then(m => m.BussinesPageModule)
      },
      {
        path: 'detail',
        loadChildren: () => import('../detail/detail.module').then(m => m.DetailPageModule)
      },
      {
        path: 'filters',
        loadChildren: () => import('../filters/filters.module').then(m => m.FiltersPageModule)
      },
      {
        path: 'modal',
        loadChildren: () => import('../modal/modal.module').then(m => m.ModalPageModule)
      },
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { ComponentsReusables } from './../../components/componetns.module';


import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsReusables,
    HomePageRoutingModule
  ],
  providers: [],
  declarations: [HomePage]
})
export class HomePageModule {}

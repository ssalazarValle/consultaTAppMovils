import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BussinesPageRoutingModule } from './bussines-routing.module';
import { ComponentsReusables } from './../../components/componetns.module';

import { BussinesPage } from './bussines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsReusables,
    BussinesPageRoutingModule
  ],
  declarations: [BussinesPage]
})
export class BussinesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListcarPageRoutingModule } from './listcar-routing.module';

import { ListcarPage } from './listcar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListcarPageRoutingModule
  ],
  declarations: [ListcarPage]
})
export class ListcarPageModule {}

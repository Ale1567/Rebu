import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListviajePageRoutingModule } from './listviaje-routing.module';

import { ListviajePage } from './listviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListviajePageRoutingModule
  ],
  declarations: [ListviajePage]
})
export class ListviajePageModule {}

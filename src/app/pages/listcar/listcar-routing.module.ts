import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListcarPage } from './listcar.page';

const routes: Routes = [
  {
    path: '',
    component: ListcarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListcarPageRoutingModule {}

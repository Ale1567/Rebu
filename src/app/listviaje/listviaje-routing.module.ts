import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListviajePage } from './listviaje.page';

const routes: Routes = [
  {
    path: '',
    component: ListviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListviajePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsRecettePage } from './details-recette.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsRecettePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsRecettePageRoutingModule {}

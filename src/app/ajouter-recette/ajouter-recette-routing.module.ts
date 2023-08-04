import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterRecettePage } from './ajouter-recette.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterRecettePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterRecettePageRoutingModule {}

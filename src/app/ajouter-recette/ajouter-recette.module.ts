import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterRecettePageRoutingModule } from './ajouter-recette-routing.module';

import { AjouterRecettePage } from './ajouter-recette.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterRecettePageRoutingModule
  ],
  declarations: [AjouterRecettePage]
})
export class AjouterRecettePageModule {}

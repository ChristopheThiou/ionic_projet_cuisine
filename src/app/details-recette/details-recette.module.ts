import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsRecettePageRoutingModule } from './details-recette-routing.module';

import { DetailsRecettePage } from './details-recette.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsRecettePageRoutingModule
  ],
  declarations: [DetailsRecettePage]
})
export class DetailsRecettePageModule {}

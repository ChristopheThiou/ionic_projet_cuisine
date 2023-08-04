import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../recette.service';
import { Recette } from '../entities';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {

  recette?: Recette[];

  constructor(private RecetteService: RecetteService) {}

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.recette = this.RecetteService.getRecettePopular();
    return;
  }
}

import { Injectable } from '@angular/core';
import { Recette } from './entities';

@Injectable({
  providedIn: 'root',
})
export class RecetteService {
  recette: Recette[] = [
    {
      id: '1',
      name: 'spaghetti a la bolognaise',
      categorie: 'plat',
      description: 'pate + eau chaude + tomate',
      popular: false,
    },
    {
      id: '2',
      name: 'oeuf mimosa',
      categorie: 'accompagnement',
      description: 'oeuf + eau chaude + mayonnaise',
      popular: false,
    },
    {
      id: '3',
      name: 'pizza',
      categorie: 'plat',
      description: 'tomate + fromage + ananas',
      popular: true,
    },
    {
      id: '4',
      name: 'eclair au cafe',
      categorie: 'dessert',
      description: 'aucune idee',
      popular: false,
    },
    {
      id: '5',
      name: 'chausse aux moines',
      categorie: 'fromage',
      description: 'lait de vache',
      popular: true,
    },
  ];

  getAllRecette() {
    return this.recette;
  }

  getRecettePopular(): any {
    this.recette = this.recette.filter((recette) => {
      return recette.popular === true;
    });
  }

  getRecetteByKeyword() {
    // return this.recette.filter();
  }

  getRecette(recetteId: string) {
    return this.recette.find((recette) => {
      return recette.id === recetteId;
    });
  }

  deleteRecette(recetteId: string) {
    this.recette = this.recette.filter((recette) => {
      return recette.id !== recetteId;
    });
  }

  persistRecette(recette: Recette) {
    return this.recette.push(recette);
  }

  insertRecette(recette: Recette): void {
    this.recette.push(recette);
  }

  constructor() {}
}

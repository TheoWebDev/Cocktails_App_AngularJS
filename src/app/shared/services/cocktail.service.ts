import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail.interface';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  public cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    {
      name: 'Mojito',
      img: 'https://www.hangoverweekends.co.uk/uploads/images/mojito.jpg',
      description: 'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.'
    },
    {
      name: 'Piña Colada',
      img: 'https://www.hangoverweekends.co.uk/uploads/images/pina_colada_cocktail.jpg',
      description: 'The classic tropical cocktail, with a distinctive look and taste. More of a smoothie as opposed to an alcoholic beverage. The modest yet perfect blend of coconut milk, rum and pineapple juice has been a firm favourite throughout the years.'
    },
    {
      name: 'Californication',
      img: 'https://www.hangoverweekends.co.uk/uploads/images/californication-cocktail.jpg',
      description: 'Californication as used by the Red Hot Chili Peppers means the mixing of different cultures. The cocktail reflects this with the various spirits used within the cocktail from all over the world. A mixture of run, vodka, tequila and gin finished with orange liqueur, lemon juice and orange juice to mask the various spirits used throughout. Strong and yet sweet. The cocktail is finished with either a slice of orange or a twisted peel of orange rind.'
    }
  ]);

  public selectedCocktail$: BehaviorSubject<Cocktail> = new BehaviorSubject(
    this.cocktails$.value[0]
  )

  public selectCocktail(index: number): void {
    this.selectedCocktail$.next(this.cocktails$.value[index])
  }

  constructor() { }
}

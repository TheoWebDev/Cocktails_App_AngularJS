import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CocktailDetailsComponent } from './cocktails-container/cocktail-details/cocktail-details.component';
import { CocktailFormComponent } from './cocktails-container/cocktail-form/cocktail-form.component';
import { CocktailListComponent } from './cocktails-container/cocktail-list/cocktail-list.component';
import { CocktailContainerComponent } from './cocktails-container/cocktails-container.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    CocktailFormComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class CocktailModule { }

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CocktailDetailsComponent } from './cocktails-container/cocktail-details/cocktail-details.component';
import { CocktailFormComponent } from './cocktails-container/cocktail-form/cocktail-form.component';
import { CocktailListComponent } from './cocktails-container/cocktail-list/cocktail-list.component';
import { CocktailContainerComponent } from './cocktails-container/cocktails-container.component';

import { COCKATIL_ROUTES } from './cocktail.routes';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  declarations: [
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    CocktailFormComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(COCKATIL_ROUTES),
    SharedModule
  ]
})
export class CocktailModule { }

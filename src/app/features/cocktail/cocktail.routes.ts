import { Routes } from "@angular/router"
import { CocktailDetailsComponent } from "./cocktails-container/cocktail-details/cocktail-details.component"
import { CocktailFormComponent } from "./cocktails-container/cocktail-form/cocktail-form.component"
import { CocktailContainerComponent } from "./cocktails-container/cocktails-container.component"

export const COCKATIL_ROUTES: Routes = [
    {
        path: "",
        component: CocktailContainerComponent,
        children: [
            { path: 'new', component: CocktailFormComponent},
            { path: ':index/edit', component: CocktailFormComponent},
            { path: ":index", component: CocktailDetailsComponent },
            { path: "", redirectTo: "0", pathMatch: "full" }
        ]
    },
]
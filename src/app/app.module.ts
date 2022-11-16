import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { SelectedDirective } from "./shared/directives/selected.directive";
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "./app.routes";
import { PanierService } from './shared/services/panier.service';
import { CocktailModule } from "./features/cocktail/cocktail.module";
import { PanierModule } from "./features/panier/panier.module";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    CocktailModule,
    PanierModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectedDirective
  ],
  bootstrap: [AppComponent],
  providers: [PanierService]
})
export class AppModule {}

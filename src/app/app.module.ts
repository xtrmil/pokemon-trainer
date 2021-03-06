import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {PokemonDetailModule } from './components/pokemon/pokemon-detail/pokemon-detail.module';
import { CollectionDashboardModule } from './components/collection-dashboard/collection-dashboard.module';
import { PokemonCatalogueComponent } from './components/pokemon/pokemon-catalogue/pokemon-catalogue.component';
import { PokemonCardModule } from './components/pokemon/pokemon-card/pokemon-card.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PokemonCatalogueComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PokemonDetailModule,
    CollectionDashboardModule,
    PokemonCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

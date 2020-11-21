import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {PokemonDetailModule } from './components/pokemon/pokemon-detail/pokemon-detail.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { PokemonListComponent } from './components/pokemon/pokemon-list/pokemon-list.component';
import { PokemonCardModule } from './components/pokemon/pokemon-card/pokemon-card.module';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PokemonListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PokemonDetailModule,
    DashboardModule,
    PokemonCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

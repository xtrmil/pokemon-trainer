import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {PokemonDetailModule } from './components/pokemon/pokemon-detail/pokemon-detail.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { PokemonCollectedItemComponent } from './components/pokemon/pokemon-collected-item/pokemon-collected-item.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PokemonCollectedItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PokemonDetailModule,
    DashboardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

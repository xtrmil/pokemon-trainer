import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon-card.component';


@NgModule({
  declarations: [PokemonCardComponent],
  imports: [CommonModule],
  exports: [PokemonCardComponent]
})
export class PokemonCardModule { }

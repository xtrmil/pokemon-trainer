import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: any;
  pokemonId: string;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonId = this.pokemon.url.split('/').filter(Boolean).pop();
  }

  getImage(): string {
    return this.pokemonService.getPokemonImage(this.pokemonId);
  }

  onPokemonClicked(pokemonId: string) {
    this.pokemonService.navigateToPokemonPage(pokemonId);
  }
}

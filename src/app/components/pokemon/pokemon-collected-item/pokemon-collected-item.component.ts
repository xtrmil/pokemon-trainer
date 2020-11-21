import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-collected-item',
  templateUrl: './pokemon-collected-item.component.html',
  styleUrls: ['./pokemon-collected-item.component.css']
})
export class PokemonCollectedItemComponent implements OnInit {

  @Input() pokemon:any;

  pokemonId: string;

  constructor(private pokemonService: PokemonService, private router: Router) { }
  
  ngOnInit(): void {
    this.pokemonId = this.pokemonService.getPokemonIdfromUrl(this.pokemon.url);
  }

  public getImage():string {
    return this.pokemonService.getPokemonImage(this.pokemonId);
  }
 
  onPokemonClicked(pokemonId: string){
    this.pokemonService.navigateToPokemonPage(pokemonId);
  }
}

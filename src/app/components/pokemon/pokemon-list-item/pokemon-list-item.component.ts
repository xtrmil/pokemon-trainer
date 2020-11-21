import { Component, Input, OnInit,} from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})



export class PokemonListItemComponent implements OnInit {

  @Input() pokemon:any;

  pokemonId: string;

  constructor(private router: Router, private pokemonService: PokemonService) { }
  
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

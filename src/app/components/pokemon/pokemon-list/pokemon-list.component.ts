import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];
  surveyListError: string | undefined;

  constructor(private pokemonService: PokemonService, private router: Router) { }

  async ngOnInit() {

    try{
      // this.pokemons = await this.pokemonService.getPokemons();
     this.pokemonService.getPokemons()
     .subscribe(data => {
      //  this.pokemons = data.results;
       console.log(data.results);
    
     })
      console.log("pokemons" + this.pokemons);
      
    }catch (e){
      this.pokemonService = e.message || e;
    }
  }

  onPokemonClicked(pokemonId: number){
    this.router.navigate(['/pokemons',pokemonId])
  }
}

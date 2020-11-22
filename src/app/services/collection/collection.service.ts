import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor() { }
  pokemonList: string[];
  areCollecting: boolean;

  collectPokemon(pokemon: any) {
    if (localStorage.getItem('pokemons') == null) {
      let temp = [];
      temp.push(pokemon)
      
      localStorage.setItem('pokemons', JSON.stringify(temp));
    } else {
      let temp = [];
      temp = JSON.parse(localStorage.getItem('pokemons')) || [];
      temp.push(pokemon);

      localStorage.setItem('pokemons', JSON.stringify(temp));
    }
  }
  getAllCollected(): any {
    let collected: string[] = JSON.parse(localStorage.getItem('pokemons'));
    return collected;
  }
}

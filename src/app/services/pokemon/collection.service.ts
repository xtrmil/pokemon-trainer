import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor() { }
  pokemonList: string[];
  collectPokemon(pokemon: any) {
    if (localStorage.getItem('pokemons') == null) {
      let temp = [];
      temp.push(pokemon)
      localStorage.setItem('pokemons', JSON.stringify(temp));
    } else {
      let temp = [];
      temp = JSON.parse(localStorage.getItem('pokemons')) || [];
      if (!temp.includes(pokemon)) {
        temp.push(pokemon);
      }
      alert(temp);
      localStorage.setItem('pokemons', JSON.stringify(temp));
    }

  }
  getAllCollected(): any{
    let collected:string = localStorage.getItem('pokemons');
    
    
    collected = collected.replace('"', '').replace('"', '').replace('"', '')
    .replace('"', '').replace('[', '').replace(']', '');

    let temp = collected.split(',');
    console.log(temp);
    return temp;
  }
}

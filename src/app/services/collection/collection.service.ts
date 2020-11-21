import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor() { }
  pokemonList: string[];
  areCollecting:boolean;

  collectPokemon(pokemon: any) {
    if (localStorage.getItem('pokemons') == null) {
      let temp = [];
      temp.push(pokemon)
      alert("Pokemons collected: " + pokemon);
      localStorage.setItem('pokemons', JSON.stringify(temp));
    } else {
      let temp = [];
      temp = JSON.parse(localStorage.getItem('pokemons')) || [];
      if (temp.includes(pokemon)) {
        alert("ERROR: Pokemon allready collected")
      } else {
        temp.push(pokemon);
        alert("Pokemons collected: " + pokemon);
      }
      localStorage.setItem('pokemons', JSON.stringify(temp));
    }
  }
  getAllCollected(): any {
    let collected: string[] = JSON.parse(localStorage.getItem('pokemons'));
    return collected;
  }
  setCollectionStatus(areCollecting:boolean){
    this.areCollecting = areCollecting;
  }
  getCollectionStatus(): boolean{
    return this.areCollecting;
  }
}

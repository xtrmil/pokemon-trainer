import { Component, OnInit } from '@angular/core';
import { CollectionService } from 'src/app/services/collection/collection.service';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];
  surveyListError: string | undefined;

  constructor(private pokemonService: PokemonService, private collectionService: CollectionService) { }

  async ngOnInit() {
    this.collectionService.setCollectionStatus(true);
    try {
      this.pokemonService.getPokemons()
        .subscribe(data => {
          this.pokemons = data.results;
        })

    } catch (e) {
      this.pokemonService = e.message || e;
    }
  }
}

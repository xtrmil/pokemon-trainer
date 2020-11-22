import { Component, OnInit } from '@angular/core';
import { CollectionService } from 'src/app/services/collection/collection.service';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './collection-dashboard.component.html',
  styleUrls: ['./collection-dashboard.component.css']
})
export class CollectionDashboardComponent implements OnInit {
  collectedPokemons: any[] = [];
  pokemon: any;
  pokemons: any[] = [];
  haveCollected: boolean;
  constructor(private pokemonService: PokemonService, private collectionService: CollectionService) { }

  ngOnInit() {
    if (this.collectionService.getAllCollected() == null) {
      this.haveCollected = false;
    } else {
      this.haveCollected = true;
    }
    this.collectedPokemons = this.collectionService.getAllCollected();

    this.haveCollected == true;
    for (const key in this.collectedPokemons) {

      try {

        this.pokemonService.getPokemonByName(this.collectedPokemons[key])
          .subscribe(data => {
            this.pokemon = ({
              name: data.name,
              url: `${environment.pokeUrl}${data.id}`
            })
            this.pokemons.push(this.pokemon);
          })
      } catch (e) {
        e.message;
      }
    }
  }
}
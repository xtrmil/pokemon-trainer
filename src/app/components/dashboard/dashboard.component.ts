import { Component, OnInit } from '@angular/core';
import { CollectionService } from 'src/app/services/pokemon/collection.service';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { SessionService } from 'src/app/services/session/session.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  collectedPokemons: any[] = [];
  pokemon: any;
  pokemons: any[] = [];
  constructor(private session: SessionService, private pokemonService: PokemonService, private collectionService: CollectionService) { }

  async ngOnInit() {
    this.collectedPokemons = this.collectionService.getAllCollected();

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
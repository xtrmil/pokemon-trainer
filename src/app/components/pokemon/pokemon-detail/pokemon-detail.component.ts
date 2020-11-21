import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CollectionService } from 'src/app/services/collection/collection.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemonId: string;
  details: any;
  typekeys: any;
  abilitiesKeys: any;
  baseStatsKeys: any;
  movesKeys: any;
  areCollecting: boolean;

  ngOnInit(): void {

    this.getPokemonDetails(this.getId());
    this.areCollecting = this.collectionService.getCollectionStatus();
  }

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private collectionService: CollectionService, private location: Location) { }

  getPokemonDetails(pokemonId: string): Observable<any> {

    try {
      this.pokemonService.getPokemonById(pokemonId)
        .subscribe(data => {
          this.details = data;
          this.typekeys = Object.keys(data.types);
          this.abilitiesKeys = Object.keys(data.abilities);
          this.baseStatsKeys = Object.keys(data.stats);
          this.movesKeys = Object.keys(data.moves);

        })
    } catch (e) {
      this.pokemonService = e.message || e;
    }

    return this.details;
  }
  public getId() {
    return this.pokemonId = this.route.snapshot.paramMap.get('pokemonId');
  }
  public collect(pokemonName: string) {
    this.collectionService.collectPokemon(pokemonName)
  }

  public getImage(): string {
    return this.pokemonService.getPokemonImage(this.pokemonId);
  }
  public setCollectionStatus(areCollecting: boolean) {
    this.areCollecting = areCollecting;
  }
  back(): void {
    this.location.back();
  }

}

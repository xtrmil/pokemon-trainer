import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';
import { CollectionService } from 'src/app/services/pokemon/collection.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';



@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  ngOnInit(): void {
    
    this.getId();
    this.getPokemonDetails(this.pokemonId);
  }


 
  pokemonId: string;

  details: any;
  typekeys:any;
  abilitiesKeys:any;
  baseStatsKeys:any;
  movesKeys:any;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private collectPokemon: CollectionService) { }


  getPokemonDetails(pokemonId:string): Observable<any> {

    try {
      this.pokemonService.getPokemonById(this.pokemonId)
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
 
     this.pokemonId = this.route.snapshot.paramMap.get('pokemonId');
 
  }
  public collect(pokemonName:string){
    this.collectPokemon.CollectPokemon(pokemonName)
  }

}

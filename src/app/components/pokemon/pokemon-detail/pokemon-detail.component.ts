import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  ngOnInit(): void {

  }
  // @Input() pokemonId:string;

  // pokemonDetails: any;
  constructor() { }

  // async ngOnInit(){
  //  await this.getPokemonDetails();
  // }
  // public getPokemonDetails(): Observable<any> {

  //   try{
  //     this.pokemonService.getPokemonById(this.pokemonId)
  //     .subscribe(data => {
  //        this.pokemonDetails = data;
  //       console.log(this.pokemonDetails);
     
  //     })
  //   }catch (e){
  //     this.pokemonService = e.message || e;
  //   }
  //   return this.pokemonService.getPokemonById(this.pokemonId);
  // }


}

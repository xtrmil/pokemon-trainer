import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})



export class PokemonListItemComponent implements OnInit {
  @Input() pokemon:any;
  @Output() click: EventEmitter<any> = new EventEmitter();
  pokemonDetails: any;
  pokemonId: string;
  constructor(private pokemonService: PokemonService, private router: Router) { }
  
  ngOnInit(): void {
    this.pokemonId = this.getPokemonIdfromUrl(this.pokemon.url);
  }

  onPokemonItemClicked(){
    // await this.getPokemonDetails();
    this.click.emit(this.pokemonId);
  }
  public getPokemonIdfromUrl (url:string):string{
    const id = url.split( '/' ).filter( Boolean ).pop();
    return id;
  }

  public getPokemonImage():string {
    return `${environment.imgUrl}${this.pokemonId}.png`;
  }
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

  onPokemonClicked(pokemonId: number){
    this.router.navigate(['/details',pokemonId])
  }
}

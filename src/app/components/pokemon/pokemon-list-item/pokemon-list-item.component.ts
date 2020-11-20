import { Component, Input, OnInit,} from '@angular/core';
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

  pokemonId: string;

  constructor(private pokemonService: PokemonService, private router: Router) { }
  
  ngOnInit(): void {
    this.pokemonId = this.getPokemonIdfromUrl(this.pokemon.url);
  }

  public getPokemonIdfromUrl (url:string):string{
    const id = url.split( '/' ).filter( Boolean ).pop();
    return id;
  }

  public getPokemonImage():string {
    return `${environment.imgUrl}${this.pokemonId}.png`;
  }
 
  onPokemonClicked(pokemonId: string){
    this.router.navigate(['/pokemon',pokemonId])
  }
}

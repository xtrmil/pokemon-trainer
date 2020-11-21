import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CollectionService } from './collection.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient, private collectionService: CollectionService, private router: Router) { }

  public getPokemons(): Observable<any>{
    return this.http.get(`${environment.apiUrl}/api/v2/pokemon?limit=100`);
  }
  getPokemonById(pokemonId:any): Observable<any>{
    return this.http.get( `${environment.apiUrl}/api/v2/pokemon/${pokemonId}`);
  }
  getPokemonByName(pokemonName:any): Observable<any>{
    return this.http.get( `${environment.apiUrl}/api/v2/pokemon/${pokemonName}`);
  }

  public getPokemonImage(id:string):string {
    return `${environment.imgUrl}${id}.png`;
  }

  public getPokemonIdfromUrl (url:string):string{
    const id = url.split( '/' ).filter( Boolean ).pop();
    return id;
  }

  navigateToPokemonPage(pokemonId: string){
    this.router.navigate(['/pokemon',pokemonId])
  }
}

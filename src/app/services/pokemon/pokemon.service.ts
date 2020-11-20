import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CollectionService } from './collection.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient, private collectionService: CollectionService) { }

  public getPokemons(): Observable<any>{
    return this.http.get(`${environment.apiUrl}/api/v2/pokemon?limit=100`);
  }
  getPokemonById(pokemonId:any): Observable<any>{
    return this.http.get( `${environment.apiUrl}/api/v2/pokemon/${pokemonId}`);
  }
  getPokemonByName(pokemonName:any): Observable<any>{
    return this.http.get( `${environment.apiUrl}/api/v2/pokemon/${pokemonName}`);
  }
}

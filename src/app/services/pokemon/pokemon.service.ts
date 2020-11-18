import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  public getPokemons(): Observable<any>{
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200');
  }
  // getPokemons(): Promise<any>{
  //   return this.http.get( `${environment.apiUrl}/api/v2/pokemon/1`).toPromise();
  // }
  
}

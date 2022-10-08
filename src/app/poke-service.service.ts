import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './models/poke';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getPokemon(pokeName: string): Observable<any>{
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  }
  


}
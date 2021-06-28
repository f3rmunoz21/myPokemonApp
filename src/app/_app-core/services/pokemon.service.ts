import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { Pokemon } from 'src/app/_app-core/models/pokemon.model';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( public messageService: MessageService, private http: HttpClient) {
    console.log("hello");
  }

  public getPokemon(i: string): Observable<Pokemon> {
    this.messageService.add("Pokemon Service fetched Pokemon");
    // return of(Pokemons);
    return this.http.get<Pokemon[]>("https://pokeapi.co/api/v2/pokemon/" + i.toLowerCase()).pipe(
      retry(2),
      catchError((error, caught )=>{
        return of(error);
      })
    );
  }



}

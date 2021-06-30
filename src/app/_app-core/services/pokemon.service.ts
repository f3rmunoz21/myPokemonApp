import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Pokemon } from 'src/app/_app-core/models/pokemon.model';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public pokemon: Pokemon;
  public pokemonUpdated = new EventEmitter();

  constructor(public messageService: MessageService, private http: HttpClient) {
    console.log('hello');
  }

  public getPokemon(i: string): Observable<Pokemon> {
    this.messageService.add('Pokemon Service fetched Pokemon');
    // return of(Pokemons);
    return this.http
      .get<Pokemon>('https://pokeapi.co/api/v2/pokemon/' + i.toLowerCase())
      .pipe(
        retry(2),
        map((p) => {
          this.pokemon = null;
          setTimeout(() => {
            this.pokemon = new Pokemon(p);
            this.pokemonUpdated.emit();
          }, 800);
        }),
        catchError((error, caught) => {
          return of(error);
        })
      );
  }
}

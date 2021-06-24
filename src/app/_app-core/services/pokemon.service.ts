import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Pokemons } from 'src/app/mock-pokemons';
import { Pokemon } from 'src/app/pokemon';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( public messageService: MessageService) {
    console.log("hello");
  }

  public getPokemon(i: number): Observable<Pokemon[]> {
    this.messageService.add("Pokemon Service fetched Pokemon");
    if (i === 0) {
      return throwError({ errorMessage: 'some error' });
    }
    return of(Pokemons);
  }

}

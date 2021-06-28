import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/_app-core/models/pokemon.model';
import { MessageService } from '../_app-core/services/message.service';
import { PokemonService } from '../_app-core/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.sass']
})

export class PokemonsComponent {

  selectedPokemon?: Pokemon;
  pokemon: any;
  constructor(public pokemonService: PokemonService, public messageService: MessageService) { }

  public selectPokemon(pokemon: any): void {
    console.log(pokemon);
    this.selectedPokemon = pokemon;
    this.messageService.add(`Selected ${pokemon.name}`)
  }

  public getPokemon(i: string): void {
    this.pokemonService.getPokemon(i).subscribe(p => {
      console.log("This is line 30", p);
      this.pokemon = new Pokemon(p);
    }, (err) => {
      console.error("Something went wrong.");
    }, () => {
      console.info("done");
    });
  }

  // public getPokemonType(): void {
  //   if(pokemon.types[0]==ELECTRIC) {
  //     electricTF = true;
  //   }
  // }

}

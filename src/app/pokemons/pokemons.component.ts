import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';
import { Pokemons } from '../mock-pokemons';
import { MessageService } from '../_app-core/services/message.service';
import { PokemonService } from '../_app-core/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.sass']
})
export class PokemonsComponent implements OnInit {

  selectedPokemon?: Pokemon;
  pokemon: Pokemon[] = [];
  constructor(public pokemonService: PokemonService, public messageService: MessageService) { }

  ngOnInit(): void {
    this.getPokemons(Math.round(Math.random()));
  }

  public selectPokemon(pokemon: any): void {
    console.log(pokemon);
    this.selectedPokemon = pokemon;
    this.messageService.add(`Selected ${pokemon.name}`)
  }

  public getPokemons(i: number): void {
    this.pokemonService.getPokemon(i).subscribe(p => {
      this.pokemon = p;
    }, (err) => {
      console.error("Something went wrong.");
      setTimeout(() => {
        this.getPokemons(Math.round(Math.random()));
      }, 1000);
    }, () => {
      console.info("done");
    });
  }

}
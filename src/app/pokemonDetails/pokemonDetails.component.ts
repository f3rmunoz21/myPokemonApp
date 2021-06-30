import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/_app-core/models/pokemon.model';
import { PokemonService } from '../_app-core/services/pokemon.service';


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemonDetails.component.html',
  styleUrls: ['./pokemonDetails.component.sass']
})
export class PokemonDetailsComponent {

  public statsArray: string[] = [
    'HP',
    'ATTACK',
    'DEFENSE',
    'SP-ATK',
    'SP-DEF',
    'SPEED'
  ];

  constructor(
    public pokemonService: PokemonService
  ) {
    this.pokemonService.pokemonUpdated.subscribe(() => {
      setTimeout(() => {
        const el = document.getElementById("audio") as HTMLAudioElement;
        el.src = 'https://play.pokemonshowdown.com/audio/cries/' + pokemonService.pokemon.name +'.mp3';
        el.play();
      }, 500);
    })
  }
}



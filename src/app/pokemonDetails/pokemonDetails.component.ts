import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/_app-core/models/pokemon.model';


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemonDetails.component.html',
  styleUrls: ['./pokemonDetails.component.sass']
})
export class PokemonDetailsComponent {

  @Input() pokemon?: Pokemon;

}



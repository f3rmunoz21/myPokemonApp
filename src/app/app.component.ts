import { Component } from '@angular/core';
import { PokemonService } from './_app-core/services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Fernie\'s Pokemon App';

  constructor(
    public pokemonService: PokemonService
  ) {
    this.pokemonService;
  }
}

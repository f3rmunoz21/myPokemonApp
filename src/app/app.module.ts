import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonDetailsComponent } from './pokemonDetails/pokemonDetails.component';
import { PokemonService } from './_app-core/services/pokemon.service';
import { MessageService } from './_app-core/services/message.service';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [	
    AppComponent,
    PokemonsComponent, 
    PokemonDetailsComponent,
      MessagesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [
    PokemonService, 
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

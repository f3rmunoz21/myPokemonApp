import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { Pokemons } from './mock-pokemons';
import { PokemonsComponent } from './pokemons/pokemons.component';

const routes: Routes = [ 
  {
    path: "", 
    component: PokemonsComponent
  },

  {
    path: "messages", 
    component: MessagesComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, ViewChild } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { PokemonResponse } from '../../models/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-battles',
  templateUrl: './pokemon-battles.component.html',
  styleUrl: './pokemon-battles.component.css'
})
export class PokemonBattlesComponent {

  lifePokemon1: number = 100;
  lifePokemon2: number = 100;
  pokemonTurn: number = Math.floor(Math.random() * 2) + 1;
  pokemon1Id: number | undefined;
  pokemon2Id: number | undefined;
  @ViewChild(PokemonComponent) pokemon1Component: PokemonComponent | undefined;
  @ViewChild(PokemonComponent) pokemon2Component: PokemonComponent | undefined;
  pokemon: PokemonResponse | undefined;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

  }



  handleAttack(damage: number, target: 'pokemon1' | 'pokemon2'): void {
    if (target === 'pokemon1') {
      this.lifePokemon1 = Math.max(this.lifePokemon1 - damage, 0);
      if (this.lifePokemon1 <= 0) {
        setTimeout(() => {
          alert('Pokemon 2 ha ganado, reinicie la partida o cambie de pokemon');
        }, 500);
        return;
      }
    } else {
      this.lifePokemon2 = Math.max(this.lifePokemon2 - damage, 0);
      if (this.lifePokemon2 <= 0) {
        setTimeout(() => {
          alert('Pokemon 1 ha ganado, reinicie la partida o cambie de pokemon');
        }, 500);
        return;
      }
    }


    this.pokemonTurn = this.pokemonTurn === 1 ? 2 : 1;
  }
  handlePokemonChange(): void {
    this.pokemonTurn = this.pokemonTurn === 1 ? 2 : 1;
  }


  resetBattle(): void {
    this.lifePokemon1 = 100;
    this.lifePokemon2 = 100;
    this.pokemonTurn = Math.floor(Math.random() * 2) + 1;
  }
}

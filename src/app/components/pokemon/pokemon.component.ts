import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonResponse } from '../../models/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  @Input() pokemonId!: number;
  pokemon!: PokemonResponse;
  @Input() life: number = 100;
  @Input() isTurn: boolean = false;
  @Output() onAttackDone = new EventEmitter<number>();
  @Output() cambiarPokemon = new EventEmitter<void>();


  newPokemonId!: number
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    if (this.pokemonId) {
      this.pokemonService.getPokemon().subscribe((pokemon: PokemonResponse) => {
        this.pokemon = pokemon;
      });
    }
  }

  getProgressBarColor(): string {
    if (this.life >= 70) {
      return 'success';
    } else if (this.life >= 40) {
      return 'warning';
    } else {
      return 'danger';
    }
  }

  attack(): void {
    const damage = Math.floor(Math.random() * (50 - 30 + 1)) + 30;
    this.onAttackDone.emit(damage);
  }

  cambiarPokemons(): void {
    this.pokemonService.getPokemon().subscribe((pokemon: PokemonResponse) => {
      this.life = 100;
      this.pokemon = pokemon;
      this.cambiarPokemon.emit();

    })
  }
}

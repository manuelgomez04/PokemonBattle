export interface PokemonBattleResponse {
    count: number
    next: string
    previous: any
    results: PokemonList[]
  }
  
  export interface PokemonList {
    name: string
    url: string
  }
  
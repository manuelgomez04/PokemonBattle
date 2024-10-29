import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonBattlesComponent } from './components/pokemon-battles/pokemon-battles.component';

const routes: Routes = [
  {
    path: 'pokemon-battles', component: PokemonBattlesComponent
  },
  {
    path: '', redirectTo: 'pokemon-battles', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

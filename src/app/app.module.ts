import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideHttpClient } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonBattlesComponent } from './components/pokemon-battles/pokemon-battles.component';
import { ImagePipe } from './pipes/image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonBattlesComponent,
    ImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [provideHttpClient(), PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [//se indican todas las clases de nuestros componentes
    AppComponent,
    /*HeroeComponent,
    ListadoComponent*/
  ],
  imports: [//importa todos los modulos que se usaran en la aplicacion
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]//indica el componente principal
})
export class AppModule { }

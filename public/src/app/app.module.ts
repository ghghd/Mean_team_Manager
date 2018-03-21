import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { GameComponent } from './game/game.component';
import { AddComponent } from './add/add.component';
import { Game2Component } from './game2/game2.component';
import { Game3Component } from './game3/game3.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    GameComponent,
    AddComponent,
    Game2Component,
    Game3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

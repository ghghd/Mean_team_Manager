import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { GameComponent } from './game/game.component';
import { AddComponent } from './add/add.component';
import { Game2Component } from './game2/game2.component';
import { Game3Component } from './game3/game3.component';

const routes: Routes = [
  { path: 'player/list',component: ListComponent },
  {path: 'status/game/1', component: GameComponent},
  { path: 'players/addplayer',component: AddComponent },
  {path: 'status/game/2', component: Game2Component},
  {path: 'status/game/3', component: Game3Component},
  { path: '', pathMatch: 'full', redirectTo: 'player/list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

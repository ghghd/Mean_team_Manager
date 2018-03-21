import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  players: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getPlayers();

  }
  getPlayers(){
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      this.players= data['player'];
      console.log(this.players);
    })
  }
  playing(id){
    let inGame = 'Playing';
    let observable = this._httpService.addGame(id, inGame);
    observable.subscribe(data => {
      this.players = data['player'];
    })
    this.ngOnInit();
  }
  notPlaying(id){
    let outGame = "Not Playing";
    let observable = this._httpService.addGame(id, outGame);
    observable.subscribe(data => {
      this.players = data['player'];
    })
    this.ngOnInit();
  }
  undecided(id){
    let outGame = "Undecided";
    let observable = this._httpService.addGame(id, outGame);
    observable.subscribe(data => {
      this.players = data['player'];
    })
    this.ngOnInit();
  }
  
}

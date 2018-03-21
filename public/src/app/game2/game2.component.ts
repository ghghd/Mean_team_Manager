import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit {
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
    })
  }
  playing(id){
    let inGame = 'Playing';
    let observable = this._httpService.addGame2(id, inGame);
    observable.subscribe(data => {
      this.players = data['player'];
    })
    this.ngOnInit();
  }
  notPlaying(id){
    let outGame = "Not Playing";
    let observable = this._httpService.addGame2(id, outGame);
    observable.subscribe(data => {
      this.players = data['player'];
    })
    this.ngOnInit();
  }
  undecided(id){
    let outGame = "Undecided";
    let observable = this._httpService.addGame2(id, outGame);
    observable.subscribe(data => {
      this.players = data['player'];
    })
    this.ngOnInit();
  }
}

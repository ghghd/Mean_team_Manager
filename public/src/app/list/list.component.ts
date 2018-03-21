import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
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
  delete(id, playername){
    let x= confirm('You are about to Delete' + playername);
    if(x){
      let observable = this._httpService.deletePlayer(id);
      observable.subscribe(data => {
    })
    }else {};
    this.ngOnInit();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  addPlayer(player){
    return this._http.post('/players/new/', player);
  }
  getAll(){
    return this._http.get('/players/list');
  }
  getPlayer(id){
    return this._http.get('/players/'+id);
  }
  
  deletePlayer(id){
    return this._http.delete('/players/delete/'+id);
  }
  addGame(id, add){
    return this._http.put('/game/add/1',{id: id, game:add});
  }
  addGame2(id, add){
    return this._http.put('/game/add/2',{id: id, game:add});
  }
  addGame3(id, add){
    return this._http.put('/game/add/3',{id: id, game:add});
  }
}

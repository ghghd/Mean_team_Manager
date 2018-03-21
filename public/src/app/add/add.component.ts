import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
newPlayer: any;
error: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.newPlayer= {name: '', position: ''};
  }
  onSubmit(id){
    let observable = this._httpService.addPlayer(this.newPlayer);
    observable.subscribe(data => {
      this.error = data['err'];
      this.newPlayer = {name: ''};
    })
    this.goHome();
  }
  goHome(){
    this._router.navigate(['/player/list']);
  }

}

import { Component, OnInit } from '@angular/core';
import { LoginGuard } from '../login/login.guard';
import { DatabaseService } from '../db/database.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  user: string = '';
  options: {name: string, active: boolean}[] = [];
  newOption: string = '';
  description: string = 'VOte no filme da semana loem ipasdapsdapsdipi asdo asduas diuaso diosau dioaus disau doisa udoiasu doisuaoid uasoid usaidu asiduasiu doaisud oias udoisau doi asod saodi oasdu ioa doa dsoui';

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.user = LoginGuard.getUser();
    this.db.getOptions().subscribe( (data) => console.log(data));
    //getOptions().subscribe( data => console.log(data));
  }
  adicionarOpcao() {
    if(this.newOption && this.newOption.length > 0){
      this.options.push({name: this.newOption, active: false});

      this.newOption = '';
    }
  }
}
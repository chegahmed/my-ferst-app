import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus ='No server was created!';
  serverName='Testserver';
  serverCreated = false;
  servers = ['Testserver','Testserver 2'];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus ="server was created is "+ this.serverName;
  }
  onRemoveServer(id:number){
    const position =id + 1;
    this.servers.splice(position,1);
  }
  onUpdateServerName(event:any){
   this.serverName =(<HTMLInputElement>event.target).value;
  }


  ngOnInit() {

  }

}

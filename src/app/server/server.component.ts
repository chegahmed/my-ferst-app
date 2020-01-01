import {Component} from "@angular/core";
/**
 * Created by ahmed on 31/08/2018.
 */
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
 // styleUrls: ['./server.component.css']
  styles:['.online {color: white;}'],
})
export  class  ServerComponent{
  serverId: number = 10;
  serverStatus:string = 'offline';

  constructor(){
  this.serverStatus = Math.random() > 0.5 ? 'online':'offline';
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green':'red';
  }

}

import {Component, OnInit} from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  loadedFeature = 'recipe';

  //accounts:{name: string,status:string}[]=[];

  constructor(){}

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDaAttSfJqfF-6CxLN0BW2PrnI5k0STiq4",
      authDomain: "ng-recipe-book-112cd.firebaseapp.com",
    })
 //   this.accounts = this.accountsService.accounts;
  }



  onNavigate(feature: string){
   this.loadedFeature = feature;
  }






  // showSecret =false;
  // log =[];
  //
  //
  // onToggleDetails(){
  //   this.showSecret = !this.showSecret;
  //   this.log.push(new Date());
  // }


}

/**
 * Created by ahmed on 22/11/2018.
 */
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";


const authRoutes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
];

@NgModule({
  imports:[
    RouterModule.forChild(authRoutes)
  ],
  exports:[RouterModule]
})
export class AuthRoutingModule{

}
